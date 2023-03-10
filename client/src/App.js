import React, { createContext, useState, useEffect } from 'react'
import { Spin, ConfigProvider, Drawer } from 'antd'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { observer } from "mobx-react-lite"
import locale from 'antd/es/locale/ru_RU'
// import CyrillicToTranslit from 'cyrillic-to-translit-js'
import BreadCrumbComp from './components/breadcrumb/BreadcrumbComp'
import { MainPage } from './pages/mainPage/MainPage'
import ErrorPage from './pages/errorPage/ErrorPage'
// import locale from 'antd/es/locale/ru_RU'
import { FooterComp } from './components/footer/FooterComp'
import './App.css'
import 'antd/dist/reset.css'
import { NavBarMenu } from './components/navBarMenu/NavBarMenu'
import { UniversalPage } from './pages/universalPage/UniversalPage'
import Scroll from './hoc/Scroll'
import { PricePage } from './pages/pricePage/PricePage'
import { ZapisNaPriyomPage } from './pages/zapisNaPriyomPage/ZapisNaPriyomPage'
import ResultCompLogin from './components/result/ResultCompLogin'
import ResultFalseLogin from './components/result/ResultFalseLogin'
import AdminPage from './pages/adminPage/AdminPage'
import UserStore from './store/UserStore'
import DataStore from './store/DataStore'
// import CalendarComp from './components/Calendar/CalendarComp'
import RequireAuth from './hoc/RequireAuth'
import { check } from './http/userAPI'
import { getAllZapisi } from './http/dataAPI'
import { ServicePage } from './pages/servicePage/ServicePage'
import { BlogPage } from './pages/blogPage/BlogPage'
import { ArticleUniversalPage } from './pages/articleUniversalPage/ArticleUniversalPage'
import { AboutPage } from './pages/aboutPage/AboutPage'
import { OtzyvyPage } from './pages/otzyvyPage/OtzyvyPage'
import { ContactPage } from './pages/contactPage/ContactPage'
import { getNewOtzyvy } from './http/otzyvyAPI'
import { MailOutlined } from '@ant-design/icons'
import { MailComp } from './components/form/mailFormComp/MailComp'
import { SMIComp } from './pages/smiPage/SMIComp'
import { useScreens } from './constans/constScreens'

export const Context = createContext(null)

const App = observer(() => {
  const [user] = useState(new UserStore())
  const [dataApp] = useState(new DataStore())
  const [loading, setLoading] = useState(true)
  const [newOtzyvy, setNewOtzyvy] = useState(false)

  const screens = useScreens()
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }


  useEffect(() => {
    check()
      .then(data => {
        user.setUserData(data)
        if (data.isActivation) {
          user.setIsAuth(true)
          user.setUser(true)
        }
      })
      .catch(data => {
        console.log('check err:', data.response.data.message)
      })
      .finally(() => setLoading(false))
  }, [user])

  useEffect(() => {
    getAllZapisi()
      .then(data => {
        dataApp.setDataZapisi(data)
      })
  }, [dataApp.resDataZapisi])


  useEffect(() => {
    getNewOtzyvy()
      .then(data => {
        dataApp.setNewOtzyvy(data)
        if (data.length) {
          setNewOtzyvy(true)
        }
      })
  }, [user.userData])


  if (loading) {
    return <div className='w-full h-screen flex justify-center items-center'><Spin size="large" /></div>
  }

  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: '#65a30d',
        },
      }}
    >
      <Context.Provider
        value={{
          user,
          dataApp,
        }}
      >
        <BrowserRouter>
          <div className="app relative">

            {
              newOtzyvy &&
              <div className='fixed top-3 right-6 animate-bounce'>
                {
                  user.userData.role === "ADMIN" &&
                  <MailOutlined
                    className='text-lime-600 text-4xl'
                    onClick={showDrawer}
                  />
                }
              </div>
            }

            <div className='flex'>
              <NavBarMenu />
              {/* <div className='w-1/5'></div> */}
              <main className={screens.lg ? 'w-4/5 pt-6' : 'w-full pt-6'}>
                <BreadCrumbComp />
                <Scroll>
                  <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/:link' element={<UniversalPage />} />
                    <Route path='/tsena-psikhologa' element={<PricePage />} />
                    <Route path='/zapis-k-psikhologu' element={<ZapisNaPriyomPage />} />
                    <Route path='/uslugi' element={<ServicePage />} />
                    <Route path='/super-adminka' element={
                      <RequireAuth>
                        <AdminPage />
                      </RequireAuth>
                    } />
                    <Route path='/uspeshno' element={<ResultCompLogin />} />
                    <Route path='/blog/psikhologiya' element={<BlogPage />} />
                    <Route path='/blog/psikhologiya/:link' element={<ArticleUniversalPage />} />
                    <Route path='/false/auth' element={<ResultFalseLogin />} />
                    <Route path='/obo-mne' element={<AboutPage />} />
                    <Route path='/otzyvy' element={<OtzyvyPage />} />
                    <Route path='/mariya-v-sredstvakh-massovoi-informatsii' element={<SMIComp />} />
                    <Route path='/psikholog-kontakti' element={<ContactPage />} />
                    <Route path='*' element={<ErrorPage />} />
                  </Routes>
                </Scroll>
              </main>

            </div>
            <FooterComp />
          </div>
          <Drawer title="Мария Вам сообщение" placement="right" onClose={onClose} open={open}>
            <MailComp />
          </Drawer>
        </BrowserRouter>
      </Context.Provider>
    </ConfigProvider>
  )
})
export default App

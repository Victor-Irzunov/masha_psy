import React from 'react'
import { Collapse, FloatButton } from 'antd'
import { Helmet } from "react-helmet"
import {
	FormOutlined, EditOutlined
} from '@ant-design/icons'
import FormZapisi from '../../components/formAdmin/formZapisi/FormZapisi'
import CalendarComp from '../../components/Calendar/CalendarComp'
import FormArticlesPage from '../../components/formAdmin/formArticlesPages/FormArticlesPage'
import FomrGetOneArticlesPage from '../../components/formAdmin/formArticlesPages/changeArticlesPage/FomrGetOneArticlesPage'

const { Panel } = Collapse


const AdminPage = () => {
	// const [dataOrder, setDataOrder] = useState([])
	return (
		<section className='pb-28 px-5'>
			<Helmet>
				<title>Страница администратора</title>
				<meta name="description" content='Страница администратора' />
			</Helmet>
			<div className=''>
				<FloatButton.BackTop />
				<p className='text-2xl mt-8 mb-8'>Страница администратора</p>
				<CalendarComp />
				<Collapse accordion bordered={false} size='small'>
					<Panel header="Добавить статью" extra={<FormOutlined className='text-xl text-lime-600 ml-1' />} key="1" className='p-2'>
						<FormArticlesPage />
					</Panel>
					<Panel header="Изменить статью" extra={<EditOutlined className='text-xl text-orange-600 ml-1' />} key="2" className='p-2'>
						<FomrGetOneArticlesPage />
					</Panel>

				</Collapse>
			</div>
		</section >
	)
}

export default AdminPage
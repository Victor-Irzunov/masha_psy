import React, { useState, useContext, useEffect } from 'react'
import { Avatar } from 'antd'
import avatar from '../../images/logo2.webp'
import { motion } from "framer-motion"
import { NavLink, Link } from 'react-router-dom'
import { navBar } from '../../constans/Constans'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { ImportOutlined, ExportOutlined, MenuOutlined } from '@ant-design/icons'
import ModalComponent from '../modalLoginRegistrat/ModalComponent'
import { Context } from '../../App'
import { observer } from 'mobx-react-lite'
import { useScreens } from '../../constans/constScreens'
import DrawerMenu from './drawerMenu/DrawerMenu'


const linkAnimation = {
	hidden: {
		y: -100,
		opacity: 0
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.1
		}
	})
}
const imgAnimation = {
	hidden: {
		y: -100,
		opacity: 0
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.1,
			duration: 1
		}
	})
}

export const NavBarMenu = observer(() => {
	const cyrillicToTranslit = new CyrillicToTranslit()
	const [open, setOpen] = useState(false)
	const { user } = useContext(Context)
	const [isUpdate, setIsUpdate] = useState(false)
	const screens = useScreens()
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		setIsUpdate(i => !i)
	}, [user.isAuth, user.userData, user])

	const showDrawer = () => {
		setOpenMenu(true);
	};

	const showModal = () => {
		setOpen(true)
	}

	const exit = () => {
		localStorage.removeItem('token')
		user.setIsAuth(false)
		user.setUser(false)
		user.setUserData({})
	}

	// console.log('screens:', screens)

	return (

		screens.lg ?
			<div className='w-1/5'>
				<nav className='bg-[#cdcecf] 
		h-screen fixed top-0
		 left-0 pl-10 pr-10 pt-20 pb-2
		 border-r border-[#bcbdbe]
		 '>
					<motion.div
						initial="hidden"
						whileInView="visible"
						className='flex flex-col justify-between h-full'
					>
						<div className=''>
							<ul
								className='tracking-wider text-[#191c1d] uppercase text-sm'
							>
								{
									navBar.map(el => {
										if (el.key === 1) {
											if (user.userData.role === "ADMIN") {
												return (
													<li
														variants={linkAnimation}
														key={el.key}
														custom={el.key}
														className='mb-3'>
														<NavLink to={`${cyrillicToTranslit.transform(el.link)}`}
															className='
										relative
										before:border-b
										before:border-black
										before:transition-all
										 before:duration-300 
										 before:ease-in-out
										before:absolute 
										before:-bottom-1 
										before:h-0
										hover:before:h-full
										before:w-0
										hover:before:w-full
										'
														>
															{el.label}
															{/* <span className='lowercase text-xs block'>{el.span && el.span}</span> */}
														</NavLink>
													</li>
												)
											}
										} else {
											return (
												<motion.li
													variants={linkAnimation}
													key={el.key}
													custom={el.key}
													className='mb-3'>
													<NavLink to={`${cyrillicToTranslit.transform(el.link)}`}
														className='
										relative
										before:border-b
										before:border-black
										before:transition-all
										 before:duration-300 
										 before:ease-in-out
										before:absolute 
										before:-bottom-1 
										before:h-0
										hover:before:h-full
										before:w-0
										hover:before:w-full
										'
													>
														{el.label}
														<span className='lowercase text-xs block'>{el.span && el.span}</span>

													</NavLink>
												</motion.li>
											)
										}

									})
								}
								{
									user.isAuth ?
										<motion.li
											variants={linkAnimation}
											custom={20}
										>
											<ExportOutlined onClick={exit} />
										</motion.li>
										:
										<motion.li
											variants={linkAnimation}
											custom={20}
										>
											<ImportOutlined onClick={showModal} />
										</motion.li>
								}
							</ul>
						</div>
						<motion.div
							variants={imgAnimation}
							custom={16}
							className='text-center'>
							<Link to='/'>
								<Avatar
									size={{
										xs: 24,
										sm: 32,
										md: 40,
										lg: 64,
										xl: 100,
										xxl: 120,
									}}
									src={avatar}
									className='border-lime-600 shadow-2xl'
								/>
								<p className='uppercase font-extrabold text-xl text-[#191c1d] mb-2'>мария ирзунова</p>
								<p className='uppercase font-light text-xs text-[#191c1d] mb-2'>психолог</p>
							</Link>
						</motion.div>
					</motion.div>
				</nav>

				<ModalComponent open={open} setOpen={setOpen} />
			</div>
			:
			<div>
				<div className='fixed top-3 right-4 p-2 border z-50'>
					<MenuOutlined
						className='text-3xl'
						onClick={showDrawer}
					/>
				</div>
				<DrawerMenu
					setOpenMenu={setOpenMenu}
					openMenu={openMenu}
					exit={exit}
					showModal={showModal}
					imgAnimation={imgAnimation}
					open={open} setOpen={setOpen}
				/>
			</div>


	)
})

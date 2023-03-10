import React from 'react'
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { titleAnimation2, titleAnimation } from '../../constans/animation/AnimationConst'
import SocialComp from '../../images/socialicon/SocialIcon'
import { EnvironmentTwoTone, PhoneTwoTone } from '@ant-design/icons'

export const ContactPage = () => {
	return (
		<section className='pt-10'>
			<Helmet>
				<title>{'Контакты психолога в Минске'}</title>
				<meta name="description" content={''} />
			</Helmet>
			<motion.div
				initial="hidden"
				whileInView="visible"
				className='sd:px-10 xy:px-5'
			>
				<motion.h1
					className='sd:text-8xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
					variants={titleAnimation2}
				>
					Контакты психолога в Минске
				</motion.h1>
				<motion.h2
					className='text-white sd:text-4xl xy:text-2xl font-bold mt-10'
					variants={titleAnimation}
				>
					Ирзунова Мария Георгиевна
				</motion.h2>
			</motion.div>

			<div className='sd:mt-32 xy:mt-12'>

				<div className='sd:px-10 xy:px-5 flex flex-wrap'>
					<div className='sd:mr-10 xy:mr-0 xy:mb-10 sd:mb-0'>
						<p className='text-xl'>Адрес кабинета в Минске</p>
							<p className='font-light'><EnvironmentTwoTone twoToneColor="#52c41a" className='text-lg mr-2' /> г. Минск, ул. П.Мстиславца 20</p>
						<p className='text-sm text-gray-600 font-light'>Первомайский район, ст.метро «Восток»</p>
						<p className='text-sm text-gray-600 font-light'>возле Национальной библиотеки</p>
					</div>

					<div className=''>
						<p className='text-xl'>Контактный телефон</p>
						<p className='font-light'><PhoneTwoTone twoToneColor="#52c41a" className='text-lg mr-2' /> +375 (29) 888-40-02</p>
					</div>
				</div>
				<div className='sd:px-10 xy:px-5 mt-10'>
					<SocialComp />
				</div>


				<div className='mt-20'>
					<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A61d7ba0aef6cf3733ac2d080eb2d3ed4b46f8df2199d1782a6784eb5ee9b364f&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
				</div>
			</div>
		</section>
	)
}
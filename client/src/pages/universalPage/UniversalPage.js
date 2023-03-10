import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { Button, Image, FloatButton, Divider } from 'antd'
import { PhoneOutlined } from '@ant-design/icons'
import { motion, useScroll, useSpring } from "framer-motion"
import { EyeOutlined, EditOutlined } from '@ant-design/icons'
import dataSemejnyj from '../../constans/semejnyj/SemejnyjConst'
import dataBesplodie from '../../constans/besplodie/BesplodieConst'
import dataPodrostok from '../../constans/podrostok/PodrostokConst'
import dataZhenskii from '../../constans/zhenskii/ZhenskiiConst'
import dataIndividualnayaConst from '../../constans/individualnaya/IndividualnayaConst'
import dataPerinatalnogoConst from '../../constans/perinatalnogo/PerinatalnogoConst'
import { UniversalComp } from '../../components/UniversalComp/UniversalComp'
import {
	titleAnimation,
	titleAnimation2,
	yCustomAnimation,
	yAnimation
} from '../../constans/animation/AnimationConst'
import {
	Link, useLocation,
} from 'react-router-dom'


export const UniversalPage = () => {
	let data
	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	})
	let location = useLocation()





	switch (location.pathname) {
		case '/besplodie':
			data = dataBesplodie
			break
		// case '/semeinii-psikholog':
		// 	data = dataSemejnyj
		// 	break
		case '/uslugi/semeinii-psikholog':
			data = dataSemejnyj
			break
		// case '/psikholog-dlya-podrostka':
		// 	data = dataPodrostok
		// 	break
		case '/uslugi/psikholog-dlya-podrostka':
			data = dataPodrostok
			break
		case '/zhenskii-psikholog':
			data = dataZhenskii
			break
		// case '/uslugi/zhenskii-psikholog':
		// 	data = dataZhenskii
		// 	break
		case '/lechenie-depressii':
			data = dataZhenskii
			break
		// case '/stoimost-psikhologa-v-minske':
		// 	data = dataZhenskii
		// 	break
		// case '/zapis-k-psikhologu-v-minske':
		// 	data = dataZhenskii
		// 	break
		// case '/mariya-irzunova-v-sredstvakh-massovoi-informatsii':
		// 	data = dataZhenskii
		// 	break
		// case '/mariya-irzunova':
		// 	data = dataZhenskii
		// 	break
		// case '/mariya-irzunova-otzivi':
		// 	data = dataZhenskii
		// 	break
		// case '/psikholog-kontakti':
		// 	data = dataZhenskii
		// 	break
		case '/uslugi/individualnaya-konsultatsiya':
			data = dataIndividualnayaConst
			break
		case '/uslugi/konsultatsiya-perinatalnogo-psikhologa':
			data = dataPerinatalnogoConst
			break

	}



	return (
		<main className='pt-20 overflow-hidden'>
			<FloatButton.BackTop />
			<section>
				<motion.div
					initial="hidden"
					whileInView="visible"
					className='sd:px-10 xy:px-5'
				>
					<motion.h1
						className='sd:text-6xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
						variants={titleAnimation2}
					>
						{data.h1}
					</motion.h1>
					<motion.h2
						className='text-white sd:text-4xl xy:text-2xl font-bold'
						variants={titleAnimation}
					>
						{data.h2}
					</motion.h2>
				</motion.div>


				<motion.div
					className='flex justify-between mt-28 text-[#191c1d] sd:px-10 xy:px-5 sd:flex-row xy:flex-col'
					initial="hidden"
					whileInView="visible"
				>
					<motion.div
						className='sd:mr-28 xy:mr-0'
						variants={yCustomAnimation}
						custom={1}
					>
						<p className='text-xl text-[#191c1d] uppercase mb-8 font-semibold'>Области моей работы</p>
						<ul className='font-light sd:text-base xy:text-sm sd:tracking-wider xy:tracking-wide'>
							{
								data.myWork.map(el => {
									return (
										<li className='mb-1 hover:underline' key={el.id}>
											<Link to={el.to}
													// smooth={true}
													// offset={-100}
													// duration={800}
													className="cursor-pointer"
												>
												{el.label}
											</Link>
											<Divider style={{marginTop:'5px', marginBottom:'5px'}}/>
										</li>
									)
								})
							}
						</ul>
					</motion.div>

					<motion.div
						className='w-1/2 text-[#191c1d] flex flex-col justify-start items-start sd:mt-0 xy:mt-6'
						variants={yCustomAnimation}
						custom={1}
					>
						<p className='sd:text-lg xy:text-sm uppercase mb-2'>Статьи по теме</p>
						<ul className='font-light sd:text-base xy:text-xs'>
							{data.article.map(el => {
								return (
									<li className='mb-1' key={el.id}>
										<Link to={el.link}
											className='underline'
										>
											{el.label}
										</Link>
										<div className='flex 
														justify-start 
														items-center
														text-[10px]
														text-gray-700
														leading-4
							 		'>
											<div className='mr-3'>
												<EditOutlined />
												<span className='ml-1'>
													{el.date}
												</span>
											</div>
											<div>
												<EyeOutlined />
												<span className='ml-1'>
													{el.countView}
												</span>
											</div>
										</div>
									</li>
								)
							})
							}
						</ul>
					</motion.div>
				</motion.div>



				<motion.div
					className='mt-12 sd:px-10 xy:px-5 flex justify-between items-center text-[#191c1d]'
					initial="hidden"
					whileInView="visible"
				>
					
					<motion.div
						className='sd:w-1/2 xy:w-full text-center'
						variants={yAnimation}
					>
						<Image src={data.img} width={`50%`} preview={false} />
					</motion.div>

					
				</motion.div>

				

				<section className='mt-16'>
					
					<article>
						<UniversalComp data={data} />
					</article>
				</section>

				<motion.section
					className='sd:px-10 xy:px-5'
					initial="hidden"
					whileInView="visible"
					id={data.conclusion.id}
				>
					<motion.h4
						className='sd:text-6xl xy:text-5xl text-white font-extrabold uppercase mb-0 pl-3'
						variants={titleAnimation2}
					>
						В
					</motion.h4>
					<motion.h4
						className='sd:text-6xl xy:text-5xl text-[#191c1d] font-extrabold uppercase'
						variants={titleAnimation}
					>
						заключение
					</motion.h4>

					<motion.div
						variants={yCustomAnimation}
						custom={1}
						className='mt-20 pb-10'
					>
						<div className='float-right sd:w-1/3 xy:w-full ml-6 mb-6'>
							<Image src={data.conclusion.img}
								preview={false}
								style={{
									borderRadius: '10px',
									// float: 'right',
									// width: '800%',

								}}
							/>
						</div>
						<p
							className='text-[#191c1d] leading-7 sd:text-base xy:text-sm'
						>
							{data.conclusion.content}
						</p>



					</motion.div>
				</motion.section>

				<motion.section
					className='bg-[#191c1d] sd:px-10 xy:px-5 sd:py-10 xy:pt-2 xy:pb-5 mt-20'
					initial="hidden"
					whileInView="visible"
				>
					<motion.p
						className='text-white sd:text-3xl xy:text-xl font-extralight mt-12 '
						variants={yCustomAnimation}
						custom={1}
					>
						{data.conclusion.content2}
					</motion.p>
					<motion.div
						className='flex justify-between sd:items-center xy:items-start sd:flex-row xy:flex-col mt-16'
						variants={yCustomAnimation}
						custom={3}
					>
						<div className='text-white font-light'>
							<p className='mb-0'>
								Стоимость одной консультации: <span className='text-lg'>{data.price} BYN</span>
							</p>
							<p className='text-xs'>
								Продолжительность: {data.time}
							</p>
						</div>

						<Link to='/zapis-k-psikhologu' className='text-white text-[12px] uppercase' style={{ background: 'transparent' }}>
							Записаться на первую консультацию
						</Link>
					</motion.div>

				</motion.section>

			</section>
			<a href='tel:80298884002'>
				<div className='fixed bottom-[100px] right-3 bg-black w-16 h-16 rounded-full flex justify-center items-center'>
					<PhoneOutlined
						className='text-white
					text-3xl animate-pulse
					'
					/>
				</div>
			</a>
			<motion.div className="fixed left-0 right-0 h-1 bg-gray-700 bottom-2" style={{ scaleX }} />
		</main>
	)
}

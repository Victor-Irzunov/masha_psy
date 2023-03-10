import React from 'react'
import { motion } from "framer-motion"
import {
	titleAnimation,
	titleAnimation2,
	xCustomAnimation,
	xCustomAnimation2,
	yAnimation,
} from '../../constans/animation/AnimationConst'

import { Divider, Image, Tooltip, FloatButton } from 'antd'
import { Link } from 'react-router-dom'
import { data } from '../../constans/servicePage/ServicePageConst'
import CyrillicToTranslit from 'cyrillic-to-translit-js'


export const ServicePage = () => {
	const cyrillicToTranslit = new CyrillicToTranslit()

	return (
		<section className='pt-10'>
			<FloatButton.BackTop />
			<motion.div
				initial="hidden"
				whileInView="visible"
				className='sd:px-10 xy:px-5 mb-12'
			>
				<motion.h1
					className='sd:text-6xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
					variants={titleAnimation2}
				>
					Консультация психолога <span className='text-white'> Минск</span>
				</motion.h1>
				<motion.h2
					className='text-white sd:text-4xl xy:text-3xl font-bold mt-20'
					variants={titleAnimation}
				>
					Услуги частного психолога
				</motion.h2>
			</motion.div>



			{data.map(el => {
				return (
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{
							// once: true,
							// amount: 0.2
						}}
						className="overflow-hidden sd:px-10 xy:px-5"
						key={el.id}
					>
						<motion.div
							className='flex justify-start items-start'
							variants={yAnimation}
						>
							<div className='sd:w-1/5 xy:w-1/3 sd:mr-7 xy:mr-2 sd:p-5 xy:p-1'>
								<Image src={el.img}
									className='rounded-full shadow-2xl'
									preview={false}
								/>
							</div>
							<div className='sd:p-5 xy:p-2 font-light xy:w-8/12 sd:w-full'>
								<h3 className='sd:text-lg xy:text-base'>
									<Link to={`/${cyrillicToTranslit.transform(el.link.split(' ').join('-'))}`}
										className='border-b border-black'
									>
										{el.h3}
									</Link>
								</h3>
								<ul className='text-sm'>
									{el.li.map(elem => {
										return (
											<li key={el.id} className='mb-1 '>
												<Link to={`/${cyrillicToTranslit.transform(elem.link.split(' ').join('-'))}`}
													className='border-b border-black  shadow-xl'
												>
													{elem.li}
												</Link>
											</li>
										)
									})}
								</ul>
								<div className='flex mt-4'>
									{
										el.type.map(item => {
											return (
												<Tooltip title={item.text} color='#65a30d' key={item.id} placement="bottom">
													<div className='flex justify-between items-start mr-5'>
														<Image src={item.img} style={{ width: '20px' }} />
														<p className='text-lime-600 font-light ml-2 sd:text-sm xy:text-xs'>{item.title}</p>
													</div>
												</Tooltip>
											)
										})
									}

								</div>
							</div>
						</motion.div>
						<Divider />
					</motion.div>
				)
			})}


			<div className='sd:px-10 xy:px-5 py-20 bg-[#191c1d] mt-20'>
				<div className='container'>
					<motion.div
						className=''
						initial="hidden"
						whileInView="visible"
					>
						<motion.div
							className='text-white'
							variants={xCustomAnimation2}
							custom={1}
						>
							<h3 className='sd:text-2xl xy:text-xl font-semibold'>Личный психолог</h3>
							<p className='sd:text-lg xy:text-sm font-light tracking-wider'>
								Услуги психолога в Минске, цены на которые размещены на моём сайте, имеют различные направления.</p>
							<p className='sd:text-lg xy:text-sm font-light tracking-wider'>
								У всех людей есть проблемы, кто-то держит их в себе, а кто-то имеет личного психолога– это хорошая практика в развитых странах .... , что психотерапевт будет работать для вас и на вас. С другой стороны, ощутимая цена за терапию для клиента - это поддержка его мотивации к изменениям и преодолению сопротивления. Собственное психологическое здоровье и развитие – самая благодарная, надежная и выгодная инвестиция.</p>
						</motion.div>
						<motion.div
							className='text-white'
							variants={xCustomAnimation}
							custom={1}
						>
							<h3 className='sd:text-2xl xy:text-xl font-semibold'>Чем услуги психолога отличаются от услуг психиатора?</h3>
							<p className='sd:text-lg xy:text-sm font-light tracking-wider'>
								цена консультации психолога не зависит от формы приема – онлайн или очно. Не зависимо от того, в каком формате с вами работают онлайн или очно, психотерапия будет успешной, если вы готовы к изменениям и принятию их в свою жизнь.

								Услуги квалифицированных психологов и психотерапевтов – это залог высокого качества вашей жизни и удовлетворенности ею. Тут важно не экономить на стоимости, а найти психолога в близком вам методе, с которым вам будет комфортно работать. психоэмоциональное здоровье чрезвычайно важно для построения здоровых отношений и достижения счастья.</p>

						</motion.div>
					</motion.div>
					<motion.div
						className=''
						initial="hidden"
						whileInView="visible"
					>
						<motion.div
							className='text-white'
							variants={xCustomAnimation2}
							custom={3}
						>
							<h3 className='sd:text-2xl xy:text-xl font-semibold'>Где работают психологи</h3>
							<p className='sd:text-lg xy:text-sm font-light tracking-wider'>
								Многие практикующие психологи ведут свою частную практику или работают с группой других психологов или медицинских работников. Практикующие психологи работают и во многих других местах. Их можно найти в школах, колледжах и университетах, больницах и медицинских клиниках, тюрьмах и исправительных учреждениях, медицинских центрах для ветеранов, общественных и психиатрических клиниках, на предприятиях и в промышленности, домах престарелых, а также в центрах реабилитации и длительного ухода.

								Услуги квалифицированных психологов и психотерапевтов – это залог высокого качества вашей жизни и удовлетворенности ею. Тут важно не экономить на стоимости, а найти психолога в близком вам методе, с которым вам будет комфортно работать. психоэмоциональное здоровье чрезвычайно важно для построения здоровых отношений и достижения счастья.</p>
						</motion.div>
						<motion.div
							className='text-white'
							variants={xCustomAnimation}
							custom={3}
						>
							<h3 className='sd:text-2xl xy:text-xl font-semibold'>Консультация психолога</h3>
							<p className='sd:text-lg xy:text-sm font-light tracking-wider'>
								26
								Чем занимаются практикующие психологи?
								Практикующие психологи имеют профессиональную подготовку и клинические навыки, чтобы помочь людям научиться более эффективно справляться с жизненными проблемами и проблемами психического здоровья. После нескольких лет обучения в аспирантуре и контролируемого обучения они получают лицензию от своих штатов на предоставление ряда услуг, включая оценку и психотерапию. Психологи помогают, используя различные методы, основанные на лучших доступных исследованиях, и учитывают чьи-то уникальные ценности, характеристики, цели и обстоятельства.

								Психологи с докторскими степенями (PsyD, PsyD или EdD) получают один из самых высоких уровней образования среди всех медицинских работников, проводя в среднем семь лет в образовании и обучении после получения степени бакалавра. По оценкам APA, в Соединенных Штатах насчитывается около 106 000 лицензированных психологов.

								Что они делают
								Практикующие психологи помогают самым разным людям и могут решить множество проблем. Некоторые люди могут обратиться к психологу, потому что они долгое время чувствовали депрессию , злость или тревогу. Или им нужна помощь в связи с хроническим заболеванием, которое мешает их жизни или физическому здоровью. У других могут быть краткосрочные проблемы, с которыми им нужна помощь, например, чувство перегруженности новой работой или скорбь о смерти члена семьи.

								Психологи могут помочь людям научиться справляться со стрессовыми ситуациями, преодолевать зависимости, справляться со своими хроническими заболеваниями, а также тесты и оценки , которые могут помочь диагностировать состояние или рассказать больше о том, как человек думает, чувствует и ведет себя. Эти тесты могут оценивать интеллектуальные навыки, когнитивные сильные и слабые стороны, профессиональные способности и предпочтения, личностные характеристики и нейропсихологическое функционирование.</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section >
	)
}

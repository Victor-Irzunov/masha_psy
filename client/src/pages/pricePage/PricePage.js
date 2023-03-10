import React from 'react'
import { motion } from "framer-motion"
import {
	titleAnimation,
	titleAnimation2
} from '../../constans/animation/AnimationConst'

export const PricePage = () => {
	return (
		<section className='pt-10'>
			<motion.div
				initial="hidden"
				whileInView="visible"
				className='sd:px-10 xy:px-5'
			>
				<motion.h1
					className='sd:text-6xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
					variants={titleAnimation2}
				>
					Цена психолога в Минске
				</motion.h1>
				<motion.h2
					className='text-white sd:text-4xl xy:text-2xl font-bold mt-20'
					variants={titleAnimation}
				>
					Прейскурант цен за одну консультацию психолога
				</motion.h2>
				<motion.p className='sd:mt-20 xy:mt-6 font-light tracking-wide text-sm'>
					Консультация может проходить как онлайн (через телефон или компьютер), так и оффлайн с посещением кабинета, который находится возле Национальной библиотеки (ст. метро "Восток"), цена при этом не меняется.
				</motion.p>
			</motion.div>

			<div className='sd:mt-24 xy:mt-12 sd:px-10 xy:px-5'>
				<div className='flex justify-between items-center'>
					<div className='w-1/4 invisible m-0.5'></div>
					<div className='w-1/4 h-20 shadow-lg bg-lime-600 flex justify-center items-center m-0.5'>
						<p className='uppercase text-white sd:text-[10px] xy:text-[8px] mb-0'>стоимость</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-gray-700 flex justify-center items-center m-0.5'>
						<p className='uppercase text-white sd:text-[10px] xy:text-[8px] mb-0 text-center'>время <br/>консультации</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-gray-700 flex justify-center items-center m-0.5'>
						<div className='text-center'>
							<p className='uppercase text-white sd:text-[10px] xy:text-[8px] mb-0'>приём</p>
							{/* <p className='uppercase text-white text-[9px] mb-0'>сеансов</p> */}
						</div>
					</div>
				</div>

				<div className='flex justify-between items-center'>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center'>
							<p className='uppercase text-black sd:text-[12px] xy:text-[8px] mb-0 font-semibold'>индивидуальная</p>
							<p className='uppercase text-black sd:text-[12px] xy:text-[8px] mb-0 font-semibold'>консультация</p>
						</div>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-lime-600 flex justify-center items-center m-0.5'>
						<p className='text-white text-[13px] mb-0'>96,00 руб</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<p className='text-black text-[13px] mb-0'>1 час</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center'>
							<p className='text-black sd:text-[13px] xy:text-[11px] mb-0'>онлайн /</p>
							<p className='text-blacksd:text-[13px] xy:text-[11px] mb-0'>в кабинете</p>
						</div>
					</div>
				</div>

				<div className='flex justify-between items-center'>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center sd:text-[12px] xy:text-[8px]'>
							<p className='uppercase text-black mb-0 font-semibold'>консультация</p>
							<p className='uppercase text-black mb-0 font-semibold'>перинатального</p>
							<p className='uppercase text-black mb-0 font-semibold'>психолога</p>
						</div>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-lime-600 flex justify-center items-center m-0.5'>
						<p className='text-white text-[13px] mb-0 uppercase'>96,00 руб</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<p className='text-black text-[13px] mb-0'>1 час</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center'>
							<p className='text-black sd:text-[13px] xy:text-[11px] mb-0'>онлайн /</p>
							<p className='text-black sd:text-[13px] xy:text-[11px] mb-0'>в кабинете</p>
						</div>
					</div>
				</div>

				<div className='flex justify-between items-center'>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center sd:text-[12px] xy:text-[8px]'>
							<p className='uppercase text-black mb-0 font-semibold'>семейная</p>
							<p className='uppercase text-black mb-0 font-semibold'>консультация</p>
						</div>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-lime-600 flex justify-center items-center m-0.5'>
						<p className='text-white text-[13px] mb-0 font-semibold'>130,00 руб</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<p className='text-black text-[13px] mb-0 '>1 - 2 часа</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center'>
							<p className='text-blacksd:text-[13px] xy:text-[11px] mb-0'>в кабинете</p>
						</div>
					</div>
				</div>

				<div className='flex justify-between items-center'>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center sd:text-[12px] xy:text-[8px]'>
							<p className='uppercase text-black mb-0 font-semibold'>консультация</p>
							<p className='uppercase text-black mb-0 font-semibold'>с подростком</p>
						</div>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-lime-600 flex justify-center items-center m-0.5'>
						<p className='text-white text-[13px] mb-0'>90,00 руб</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<p className='text-black text-[13px] mb-0'>1 час</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center sd:text-[13px] xy:text-[11px]'>
							<p className='text-black mb-0'>онлайн /</p>
							<p className='text-black mb-0'>в кабинете</p>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-10 text-gray-600 font-light leading-5 sd:px-10 xy:px-5 text-sm'>
				<p>
					Оплачивается каждая встреча по факту проведения, если консультация очная (в кабинете), или предварительно не позднее чем за сутки до проведения, если консультация онлайн (в скайпе).
					Возможен наличный и безналичный расчет. График консультаций обсуждается индивидуально. Рекомендуемый режим посещения психотерапевта - 1 раз в неделю.
				</p>
			</div>

			<section className='sd:px-10 xy:px-5 py-10 bg-[#191c1d] mt-20'>
				<div className='container'>
					<motion.div
						className=''
						initial="hidden"
						whileInView="visible"
					>
						<motion.div
							className='sd:text-lg xy:text-sm font-light tracking-wider'
							variants={titleAnimation}
						>
							<p className='text-white'>
								Услуги психолога в Минске, цены на которые размещены на моём сайте, имеют различные направления.</p>
							<p className='text-white'>
								Денежная оплата психологической помощи – это некоторая гарантия того, что психотерапевт будет работать для вас и на вас. С другой стороны, ощутимая цена за терапию для клиента - это поддержка его мотивации к изменениям и преодолению сопротивления. Собственное психологическое здоровье и развитие – самая благодарная, надежная и выгодная инвестиция.</p>
							<p className='text-white'>
								цена консультации психолога не зависит от формы приема – онлайн или очно. Не зависимо от того, в каком формате с вами работают онлайн или очно, психотерапия будет успешной, если вы готовы к изменениям и принятию их в свою жизнь.

								Услуги квалифицированных психологов и психотерапевтов – это залог высокого качества вашей жизни и удовлетворенности ею. Тут важно не экономить на стоимости, а найти психолога в близком вам методе, с которым вам будет комфортно работать. психоэмоциональное здоровье чрезвычайно важно для построения здоровых отношений и достижения счастья. </p>


						</motion.div>
						<motion.div
							className='w-[60%] pt-10'
							variants={titleAnimation2}
						>

						</motion.div>
					</motion.div>
				</div>
			</section>
		</section>
	)
}

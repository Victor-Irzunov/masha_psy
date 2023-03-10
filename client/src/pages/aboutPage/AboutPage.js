import React from 'react'
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { titleAnimation2, titleAnimation } from '../../constans/animation/AnimationConst'
import img from '../../images/about/1.webp'
import { Image } from 'antd'

export const AboutPage = () => {
	return (
		<section className='pt-10'>
			<Helmet>
				<title>{''}</title>
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
					Психолог Мария Ирзунова
				</motion.h1>
				<motion.h2
					className='text-white sd:text-4xl xy:text-2xl font-bold mt-10'
					variants={titleAnimation}
				>
					Психолог Минск
				</motion.h2>
			</motion.div>

			<div className='sd;px-10 xy:px-5 bg-white py-20'>
				<div className='w-1/3 float-left sd:mr-10 xy:mr-4 sd:mb-5 xy:mb-1'>
					<Image src={img} preview={false} className='shadow-2xl rounded-lg' />
				</div>

				<div className='text-[#191c1d] leading-6 xy:text-sm'>
					<p className='text-3xl font-bold mb-2'>Мария Георгиевна</p>
					<p className='sd:text-sm xy:text-xs font-light pl-1'>Практический и Перинатальный Психолог</p>
					<p className='font-light pl-1'>
						Зарегистрированный и сертифицированный психолог в Минске. Заслуженный член Российской Ассоциации Репродукции Человека и Международной Ассоциации Психологов с хорошей репутацией. Работает с 2015 года в Гештальт, КПТ и АРТ направлениях с различными возрастными группами и группами населения, включая стационарную психиатрическую помощь в частной клинике "Ева-клиник".
					</p>
					<p className='font-light pl-1'>
						Имеет большой опыт работы в стационарных, амбулаторных и стационарных условиях, специализируется на лечении тревоги, депрессии, травм и поведенческих проблем,  заботливо, практично и полезно помогает клиентам в индивидуальной, парной или семейной терапии, выгоранием, проблемами, связанными со стрессом, депрессией, расстройствами настроения, детским и взрослым СДВГ, травмами, взрослыми с детской травмой, проблемами отношений и привязанности.
					</p>
					<p className='font-light pl-1'>
						Ее общая страсть - поощрять, расширять возможности и поддерживать своих клиентов, чтобы они полностью реализовали свой потенциал и добились здоровой и сбалансированной жизни. Она помогла многим клиентам освободиться от старых шаблонов, способствуя развитию их способности вести оптимальную жизнь.
					</p>
					<p className='pl-1 mb-2'>Обучение:</p>
					<ul className='font-light pl-1 leading-8 mb-5'>
						<li>
							2007-2010гг. - Медицинский колледж
						</li>
						<li>
							2012-2017гг. - Белорусский Государственный Педагогический Университет ( специальность: практический психолог )
						</li>
						<li>
							2020г. - Национальный Исследовательский Институт Москвы
						</li>
						<li>
							2020-2021гг. - Волгоградская Гуманитарная Академия
						</li>
						<li>
							2020-по н.в. - Московский Гештальт Институт
						</li>
					</ul>

					<p className='pl-1 mb-2'>Работа:</p>

					<ul className='font-light pl-1 leading-8'>
						<li>
							2010-2013гг. Медицинская сестра гинекологического отделения ЦРБ
						</li>
						<li>
							2018-по н.в. - Частная консультационная психологическая практика
						</li>
						<li>
							2022-по н.в. - Работа в "Ева-клиник"
						</li>
					</ul>

				</div>
			</div>

			<div className='px-10 py-10 bg-[#191c1d] h-[80vh] flex flex-wrap'>

			</div>
		</section>
	)
}

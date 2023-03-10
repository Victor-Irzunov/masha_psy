import { Button, Divider, FloatButton } from 'antd'
import React from 'react'
import { FormOutlined, PhoneOutlined } from '@ant-design/icons'
import { Helmet } from "react-helmet"
import SliderComp from '../../components/slider/SliderComp'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import BtnMenuNavigate from '../../components/btnMenuNavigateMainPage/BtnMenuNavigate'
import SectionMainPage from '../../components/sectionMainPage/SectionMainPage'
import TextAnimationScroll from '../../components/textAnimationScroll/TextAnimationScroll'
import QuestionsMainPage from '../../components/questionsMainPage/QuestionsMainPage'
import { FotoInfoMainPage } from '../../components/fotoInfoMainPage/FotoInfoMainPage'
import { TntVideoBlock } from '../../components/tnt/TntVideoBlock'
import { ObratiliVnimanieBlock } from '../../components/obratiliVnimanieMainPage/ObratiliVnimanieBlock'
import { OnlineMainPageSection } from '../../components/onlineMainPage/OnlineMainPageSection'
import { SectionFormMainPage } from '../../components/formSectionMainPage/SectionFormMainPage'
import { ContentSection } from '../../components/contentSection/ContentSection'

const titleAnimation = {
	hidden: {
		x: 100,
		opacity: 0
	},
	visible: custom => ({
		x: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.1,
			duration: 0.6
		}
	})
}
const imageAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.9
		},
	}
}


export const MainPage = () => {
	return (
		<section className='mt-6 overflow-hidden pt-8'>
				<Helmet>
				<title>{'Психолог Минск| Консультация психолога | Ирзунова Мария'}</title>
				<meta name="description" content={'Частный психолог в Минске принимает онлайн и в кабинете. Входит в топ лучших психологов, применяет эффективные методики, помогает справиться со стрессом.'} />
			</Helmet>
			<motion.div
				initial="hidden"
				whileInView="visible"
				className='sd:px-10 xy:px-5'
			>
				<div className=''>
					<motion.h1
						variants={titleAnimation}
						custom={1}
						className='text-[#191c1d] sd:text-8xl xy:text-4xl font-semibold'>Психолог
						<span className='text-white'> Минск</span>
					</motion.h1>

					<motion.p
						variants={titleAnimation}
						custom={4}
						className='leading-6 tracking-wide font-light'>
						Здравствуйте, я одна из немногих сертифицированных клинических психологов в Минске с более чем 8-летним опытом работы, я здесь, чтобы помочь вам. Я лечу весь спектр психологических и эмоциональных трудностей, включая, психологическое бесплодие, депрессию, панику, обсессивно-компульсивное расстройство, проблемы в отношениях, связанные с тревогой физические и эмоциональные расстройства, проблемы со сном или стрессом, навязчивые мысли, семейные и супружеские конфликты, проблемы социальной тревожности и пост- травматические расстройства .
					</motion.p>
				</div>

				<div className='w-full flex justify-around mt-20 xy:items-center xx:items-center sd:items-start xx:flex-col xy:flex-col sd:flex-row'>
					<motion.div
						variants={titleAnimation}
						custom={8}
						className='mb-5'>
						<Button type='primary' shape="round" size='large' icon={<FormOutlined />}>
							<Link to='/zapis-k-psikhologu'>{' '}записаться на консультацию</Link>
						</Button>
					</motion.div>
					<motion.div
						variants={titleAnimation}
						custom={10}
						className='z-10'
					>
						<BtnMenuNavigate />
					</motion.div>
				</div>

				<motion.div
					variants={imageAnimation}
					className='mt-8 text-center '>
					<SliderComp />
				</motion.div>
			</motion.div>

			<SectionMainPage />

			<Divider />
			<TextAnimationScroll />
			<Divider />

			<QuestionsMainPage />

			<FotoInfoMainPage />
			<TntVideoBlock />
			<ObratiliVnimanieBlock />
			<OnlineMainPageSection />
			<ContentSection />
			<SectionFormMainPage />

			<a href='tel:80298884002'>
				<div className='fixed bottom-[100px] right-3 bg-black w-16 h-16 rounded-full flex justify-center items-center'>
					<PhoneOutlined
						className='text-white
					text-3xl animate-pulse
					'
					/>
				</div>
			</a>
			<FloatButton.BackTop />

		</section>
	)
}

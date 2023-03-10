import React from 'react'
import { Image } from 'antd'
import { motion } from "framer-motion"
import online from '../../images/online/online1.png'

export const OnlineMainPageSection = () => {

	// const imageAnimation = {
	// 	hidden: {
	// 		y: 100,
	// 		opacity: 0,
	// 	},
	// 	visible: {
	// 		y: 0,
	// 		opacity: 1,
	// 		transition: {
	// 			duration: 0.9
	// 		},
	// 	}
	// }

	const titleAnimation = {
		hidden: {
			x: 100,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.4,
				duration: 0.6
			}
		}
	}
	const titleAnimation2 = {
		hidden: {
			x: -100,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.4,
				duration: 0.6
			}
		}
	}



	return (
		<section
			className='sd:px-20 xy:px-5 pt-20 pb-28 mt-20'

		>
			<motion.div
				initial="hidden"
				whileInView="visible"
			>
				<motion.p
					variants={titleAnimation2}
					className='sd:text-8xl xy:text-5xl text-white font-extrabold mb-0'
				>
					Консультация
				</motion.p>
				<br />
				<motion.p
					variants={titleAnimation}
					className='sd:text-8xl xy:text-5xl text-black pl-12 font-extrabold mb-0'
				>
					онлайн
				</motion.p>
			</motion.div>
			<div className='flex xy:flex-col sd:flex-row justify-between items-center'>
				<Image src={online} preview={false} />
				<div className='sd:w-1/2 xy:w-full'>
					<p className=''>Очень удобно для тех, кто территориально находится не в Минске или нет возможности подьехать. Давольно продуктивно получается даже через экран телефона или ноутбука. Можно своевременно получить помощь и поддержку, где бы Вы не находились. У меня есть постоянные клиенты из Украины, Германии, США, Канады, России. </p>
				</div>
			</div>
		</section>
	)
}

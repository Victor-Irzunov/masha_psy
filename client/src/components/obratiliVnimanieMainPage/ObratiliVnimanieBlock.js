import React from 'react'
import { Image } from 'antd'
import { motion } from "framer-motion"
import tnt from '../../images/obratili/tnt.png'
import zoon from '../../images/obratili/zoon.png'
import handshaker from '../../images/obratili/handshaker.png'
import { useScreens } from '../../constans/constScreens'


export const ObratiliVnimanieBlock = () => {
	const screens = useScreens()
	const imgAnimation = {
		hidden: {
			x: 100,
			opacity: 0
		},
		visible: custom => ({
			x: 0,
			opacity: 1,
			transition: {
				delay: custom * 0.2,
				duration: 0.8
			}
		})
	}


	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			className='px-10 pt-10'
		>
			<div className='flex justify-between xy:flex-col sd:flex-row'>
				<div className='sd:w-1/5 xy:w-full pt-6'>
					<h4 className=''>На мою работу обратили внимание следующие авторитетные издания:</h4>
				</div>
				<div className='flex sd:justify-around xy:justify-between flex-wrap items-center sd:w-4/5 xy:w-full'>
					<motion.div
						variants={imgAnimation}
						custom={1}
					>
						<Image src={tnt} preview={false} width={screens.sm ? '180px' : '70px'} />
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={2}
					>
						<Image src={zoon} preview={false} width={screens.sm ? '200px' : '90px'} />
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={3}
					>
						<Image src={handshaker} preview={false} width={screens.sm ? '100px' : '50px'} />
					</motion.div>
				</div>
			</div>
		</motion.section>
	)
}

import React from 'react'
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { titleAnimation2, titleAnimation } from '../../constans/animation/AnimationConst'
import link from '../../images/smi/link.svg'
import { Avatar, Image } from 'antd'
import { data } from '../../constans/smi/SMIConst'

export const SMIComp = () => {
	return (
		<section className='pt-10 pb-20'>
			<Helmet>
				<title>{'Мария Ирзунова в СМИ'}</title>
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
					Мария Ирзунова в СМИ
				</motion.h1>
				<motion.h2
					className='text-white sd:text-4xl xy:text-2xl font-bold mt-10'
					variants={titleAnimation}
				>
					Минск
				</motion.h2>
			</motion.div>

			<div className='sd:px-10 xy:px-5 mt-32'>
				<p className='text-2xl font-bold'>Публикации</p>
				{
					data.map(el => {
						return (
							<div
								className='flex sd:items-center xy:items-start mt-12'
								key={el.id}
							>
								<div className='sd:p-3 xy:p-1'>
									<Avatar size={74} src={el.img} preview={false} className='rounded-full shadow-2xl' />
								</div>
								<div className='ml-5'>
									<p className='uppercase mb-2'>Публикация на {el.publik}</p>
									<div className='flex font-light'>
										<p className='mb-0 mr-2 sd:text-base xy:text-sm'>Тема: </p>
										<a
											href={el.link}
											target='_blank'
											className='underline mr-2 sd:text-base xy:text-sm'
										>
											{el.titleLink}
											{/* {' '} */}
											{/* <Image src={link} width='16px' className='ml-2' /> */}
										</a>

									</div>
									<p className='font-light text-xs mt-4'>
										Автор: Мария Ирзунова
									</p>
								</div>
							</div>
						)
					})
				}
			</div>
		</section>
	)
}

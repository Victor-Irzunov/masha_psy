import React, { useEffect, useState, useContext } from 'react'
import { motion } from "framer-motion"
import {
	titleAnimation,
	titleAnimation2,
	// xCustomAnimation,
	// xCustomAnimation2,
	// yAnimation,
	yCustomAnimation,
} from '../../constans/animation/AnimationConst'
import { Image, message,Empty } from 'antd'
import { Link } from 'react-router-dom'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { EyeOutlined, EditOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import { getAllArticle, userViewArticle } from '../../http/articleAPI'
import moment from 'moment'
import { Context } from '../../App'


export const BlogPage = () => {
	const cyrillicToTranslit = new CyrillicToTranslit()
	const [data, setData] = useState([])
	const { user } = useContext(Context)

	useEffect(() => {
		getAllArticle()
			.then(data => {
				if (data) {
					setData(data)
				}
				else message.error(data.message)
			})
	}, [])

	const countPlusOne = (id) => {
		userViewArticle(id)
			.then(data => {
				console.log('data: ', data)
			})
	}


	return (
		<section className='pt-10 pb-30'>
			<motion.div
				initial="hidden"
				whileInView="visible"
				className='sd:px-10 xy:px-5'
			>
				<motion.h1
					className='sd:text-8xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
					variants={titleAnimation2}
				>
					Статьи
				</motion.h1>
				<motion.h2
					className='text-white sd:text-6xl xy:text-2xl font-bold sd:mt-20 xy:mt-4'
					variants={titleAnimation}
				>
					психолог Минск
				</motion.h2>
			</motion.div>


			<div className='h-20'></div>

			{
				data.length ? data.map(el => {
					const img = JSON.parse(el.img)[0].img
					return (
						<motion.div
							className='sd:px-10 xy:px-5'
							initial="hidden"
							whileInView="visible"
							key={el.id}
						>
							<motion.div
								className='flex items-start mb-10'
								variants={yCustomAnimation}
								custom={el.id + 2}
							>
								<div className='sd:w-1/5 xy:w-1/3 mr-7'>
									<Image src={process.env.REACT_APP_API_URL + img}
										className='rounded-md shadow-2xl'
										preview={false}
									/>
								</div>
								<div className='xy:w-8/12 sd:w-full relative'>
									{
										user.userData.role === 'ADMIN' &&
										<div className='absolute top-0 right-0 text-pink-500'>
											{el.id}
										</div>
									}

									<h3 className='text-lg'>
										<Link to={{ pathname: `/blog/psikhologiya/${cyrillicToTranslit.transform(el.link.split(' ').join('-'))}` }}
											className='border-b border-black'
											state={{ id: el.id }}
											onClick={() => countPlusOne(el.id)}
										>
											{el.link}
										</Link>
									</h3>
									{
										el.description &&
										<p className='text-sm font-light'>
											{el.description}
										</p>
									}

									<div className='flex 
														justify-start 
														sd:items-center
														xy:items-start
														text-[12px]
														text-gray-700
														leading-4
														xy:flex-col sd:flex-row 
							 		'>
										<div className='mr-3 xy:mb-2 sd:mb-0'>
											<EditOutlined />
											<span className='ml-1'>
												{moment(el.dateTime).format('LLL')}
											</span>
										</div>


										<div className='flex 
														justify-start 
														items-center'
										>
											<div>
												<EyeOutlined />
												<span className='ml-1'>
													{el.view}
												</span>
											</div>
											<div className='ml-3'>
												<LikeOutlined />
												<span className='ml-1'>
													{el.like}
												</span>
											</div>
											<div className='ml-4'>
												<DislikeOutlined />
											</div>
										</div>

									</div>
								</div>
							</motion.div>
						</motion.div>
					)
				})
				:
				<Empty />
			}

		</section>
	)
}
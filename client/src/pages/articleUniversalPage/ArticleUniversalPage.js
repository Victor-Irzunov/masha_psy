import { motion } from "framer-motion"
import {
	titleAnimation,
	titleAnimation2,
	// xCustomAnimation,
	// xCustomAnimation2,
	// yAnimation,
} from '../../constans/animation/AnimationConst'
import React, { useEffect, useState,useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { message, Empty, Button } from 'antd'
import parse from 'html-react-parser'
import { Helmet } from "react-helmet"
// import { Link } from 'react-router-dom'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { getOneArticle, userLikeArticle } from "../../http/articleAPI"
import moment from "moment"
import { LikeOutlined, DislikeOutlined, SmileOutlined } from '@ant-design/icons'
import { Context } from "../../App"

export const ArticleUniversalPage = () => {
	// const cyrillicToTranslit = new CyrillicToTranslit()
	const [data, setData] = useState({})
	const [isActive, setIsActive] = useState(true)
	let location = useLocation()
	const { pathname } = location
	// const pathnames = pathname.split("/").filter((item) => item)
	const { user } = useContext(Context)

	// console.log('pathname:', pathname)
	// console.log('location:', typeof location.state.id)

	useEffect(() => {
		getOneArticle({ id: location.state.id })
			.then(data => {
				if (data) {
					setData(data)
					// console.log('data:', data)
				}
				else message.error(data.message)
			})
	}, [pathname])

	const likeFu = (id) => {
		userLikeArticle({ id })
			.then(data => {
				message.success(data.message)
			})
		setIsActive(i => !i)
	}

	const dislikeFu = () => {
		message.success('Спасибо Вас за оценку!')
		setIsActive(i => !i)
	}

	return (
		<section className='pt-10 pb-20 overflow-hidden'>
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
					className='sd:text-6xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
					variants={titleAnimation2}
				>
					{data.link}
				</motion.h1>
				<motion.h2
					className='text-white sd:text-4xl xy:text-2xl font-bold sd:mt-10 xy:mt-2'
					variants={titleAnimation}
				>
					{data.description}
				</motion.h2>
			</motion.div>


			<div className='h-20'></div>

			<article className="sd:px-10 xy:px-5 flex flex-col relative">
				{
					user.userData.role === 'ADMIN' &&
					<div className='absolute -top-4 right-3 text-pink-500'>
						{data.id}
					</div>
				}
				<div>
					{Object.keys(data).length ? parse(data.article) : <Empty />}
				</div>
				<div className="flex justify-between mt-10 sd:flex-row xy:flex-col sd:text-base xy:text-sm">
					<p className="font-light">Дата публикации: {moment(data.dateTime).format('LLL')}</p>
					<p className="italic font-light">Автор: Мария Ирзунова</p>
				</div>
			</article>

			{
				isActive ?

					<div className="sd:px-10 xy:px-5 mt-10">
						<p>
							Статья была интересной?
						</p>
						<Button icon={<LikeOutlined />} className='mr-4'
							onClick={() => likeFu(data.id)}
						/>
						<Button
							icon={<DislikeOutlined />}
							onClick={dislikeFu}
						/>
					</div>
					:
					<div className="sd:px-10 xy:px-5 mt-5 text-sm">
						<p>Мне очень важно Ваше мнение. Спасибо <SmileOutlined /></p>
					</div>
			}
		</section>
	)
}
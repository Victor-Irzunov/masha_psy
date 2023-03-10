import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { titleAnimation2, titleAnimation, yAnimation } from '../../constans/animation/AnimationConst'
import { ExclamationCircleOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons'
import { Popover, Rate, Avatar, Button,Image, Empty } from 'antd'
import avatar from '../../images/logo2.webp'
import { FormOtzyvy } from '../../components/form/FormOtzyvy'
import moment from 'moment'
import { getAllOtzyvy } from '../../http/otzyvyAPI'

const content = (
	<div>
		<p>Отзыв будет опубликован только если это отзыв клиента и после проверки.</p>
	</div>
)



export const OtzyvyPage = () => {
	const [data, setData] = useState([])
	const [add, setAdd] = useState(false)


	useEffect(() => {
		getAllOtzyvy()
			.then(data => {
				// console.log('data----:', data)
				setData(data)
			})
	}, [])

	const fu = (n, arr) => n + " " + arr[(n % 100 > 4 && n % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(n % 10 < 5) ? n % 10 : 5]]
	const arr1 = ['год', 'года', 'лет']

	return (
		<section className='pt-10 pb-20'>
			<Helmet>
				<title>{'Отзывы психолога в Минске | Ирзунова Мария'}</title>
				<meta name="description" content={'⭐️ Рейтинг и реальные отзывы ⚡ психолога в Минске Марии Ирзуновой.'} />
			</Helmet>
			<motion.div
				initial="hidden"
				whileInView="visible"
				className='sd:px-10 xy:px-5 sd:mb-40 xy:mb-10'
			>
				<motion.h1
					className='sd:text-8xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
					variants={titleAnimation2}
				>
					Отзывы психолога в Минске
				</motion.h1>
				<motion.h2
					className='text-white sd:text-4xl xy:text-2xl font-bold mt-10'
					variants={titleAnimation}
				>
					Ирзуновой Марии
				</motion.h2>
			</motion.div>


			{data.length ? data.map(el => {
				if (el.isPublication) {
					return (
						<motion.div
							className='sd:px-10 xy:px-5 pt-10 bg-white overflow-hidden'
							initial="hidden"
							whileInView="visible"
							key={el.id}
						>
							<motion.div
								className='border-b pb-10 overflow-hidden'
								variants={yAnimation}
							>
								<div className='flex'>
									<div className=''>
										{/* <Avatar
											style={{
												backgroundColor: '#65a30d',
											 }}
										>
											{el.name[0]}
										</Avatar> */}
										<Avatar
											 src="https://joesch.moe/api/v1/female/random"
										/>
											
									</div>
									<div className='ml-3 w-1/2'>
										<div className='flex justify-start items-center'>
											<p className='mb-0 text-lg mr-3'>{el.name}</p>
											<p className='mb-0 text-xs mr-2 text-gray-500 pt-1'>
												г. {el.city}
											</p>
											<p className='mb-0 text-xs text-gray-500 pt-1'>
												{fu(el.vozvrast, arr1)}
											</p>
										</div>
										<p className='text-[10px] text-gray-400'>{moment(el.createdAt).startOf('hour').fromNow()}</p>
										<Rate
											allowHalf
											character={<HeartOutlined />}
											defaultValue={+el.rate}
											style={{ color: '#f80759' }}
										/>

									</div>
									<div className='w-1/4'>
									</div>
								</div>
								<div className='pl-6 mt-2'>
									<p className='text-left text-sm mt-4'>
										{el.otzyv}
									</p>
								</div>



								<div className='pl-10 mt-6'>
									<div className='flex'>
										<Avatar icon={<Image src={avatar} />} size='small' />
										<div className='ml-2'>
											<p className='text-sm mb-0'>Мария</p>
											<p className='text-[10px] text-gray-400'>психолог</p>
										</div>
									</div>
									<div className='pl-8'>
										<p className='text-xs text-gray-500 inline'>{el.response}</p>
									</div>
								</div>
							</motion.div>

						</motion.div>
					)
				}
			})
				:
				<Empty/>
		}






			<div className='mt-14 px-10'>
				<div
					style={{
						marginBottom: 16,
					}}
					className='flex items-center justify-end'
				>

					<Popover content={content} title={<div className='text-center'><ExclamationCircleOutlined className='text-2xl text-orange-500 ml-3' /></div>} trigger="click">
						<ExclamationCircleOutlined className='text-xl mr-5 text-orange-400' />
					</Popover>
					<Button onClick={() => setAdd(true)}>Добавить отзыв</Button>
				</div>
			</div>

			{

				add &&
				<div className='px-10'>
					<FormOtzyvy setAdd={setAdd} />
				</div>
			}

		</section>
	)
}
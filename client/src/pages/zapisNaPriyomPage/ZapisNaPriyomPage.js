import React, { useState, useRef, useContext, useEffect } from 'react'
import { motion } from "framer-motion"
import {
	titleAnimation,
	titleAnimation2,
	yCustomAnimation
} from '../../constans/animation/AnimationConst'
import { ScheduleMeeting, timeSlotDifference } from 'react-schedule-meeting'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { ru } from 'date-fns/locale'
import FormZapisUser from '../../components/form/formZapis/FormZapisUser'
import { message, Tour, Button, Divider, Empty } from 'antd'
import { Context } from '../../App'
import { observer } from "mobx-react-lite"
import { useScreens } from '../../constans/constScreens'
// import moment from 'moment'

// moment.locale('ru');
// const availableTimeslots = [0, 1, 2, 3, 4, 5, 6, 7].map((id) => {
// 	return {
// 		id,
// 		startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
// 		endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(21, 0, 0, 0)),
// 	}
// })



export const ZapisNaPriyomPage = observer(() => {
	const [value, setValue] = useState('')
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null)
	const screens = useScreens()
	const [open, setOpen] = useState(false)
	const { dataApp } = useContext(Context)

	// const [data, setData] = useState([])
	// const [data2,setData2] = useState([])

	// const arr = JSON.parse(JSON.stringify(availableTimeslots))


	const steps = [
		{
			title: 'Для того, что-бы записаться на приём к психологу, необходимо',
			description: 'выбрать удобную для Вас дату и время консультации',
			target: () => ref1.current,
		},
		{
			title: 'Следующим шагом Вам необходимо заполнить форму, ввести имя, Ваш телефон и выбрать тип консультации.',
			description: 'Вот поля для заполнения',
			target: () => ref2.current,
		},
		{
			title: 'Последний шаг после заполнения полей',
			description: 'Нажмите кнопку ЗАПИСАТЬСЯ',
			target: () => ref3.current,
		},
	]


	const availableTimeslots = [0, 1, 2, 3, 4, 5, 6, 7].map((id) => {
		return {
			id,
			startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
			endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(21, 0, 0, 0)),
		}
	})

	useEffect(() => {

	}, [dataApp.dataZapisi])

	// console.log('availableTimeslots: ', availableTimeslots)
	// console.log('data:', data)



	const clickScroll = (params) => {
		setTimeout(() => window.scrollBy({
			top: params,
			left: 0,
			behavior: 'smooth',
		}), 150)
	}
	const f1 = (e) => {
		setValue(e.startTime)
		clickScroll(350)
		// e.resetSelectedTimeState()
		// e.resetDate()
		message.info('Заполните пожалуйста ниже форму')
	}

	// const availableTimeslots = [
	// 	{
	// 		startTime: moment('2023-02-14T06:00:00.000Z').format(),
	// 		endTime: moment('2023-02-14T18:00:00.000Z').format(),
	// 	},
	// ]

	const unavailableTimeSlots = []
	if (dataApp.dataZapisi.length) {
		dataApp.dataZapisi.forEach(el => {

			unavailableTimeSlots.push({ startTime: el.start, endTime: el.end })
		})
	}

	// const unavailableTimeSlots = [
	// 	{
	// 		startTime: moment('2023-02-14T10:00:00.000Z').format(),
	// 		endTime: moment('2023-02-14T12:00:00.000Z').format(),
	// 		id: 1
	// 	},
	// 	{
	// 		startTime: moment('2023-02-14T14:00:00.000Z').format(),
	// 		endTime: moment('2023-02-14T16:00:00.000Z').format(),
	// 		id: 2
	// 	},

	// 	// {
	// 	// 	startTime: moment('2023-02-14T10:00:00.000Z').format(),
	// 	// 	endTime: moment('2023-02-14T12:00:00.000Z').format(),
	// 	// 	id: 3
	// 	// },


	// ]
	// console.log('unavailableTimeSlots:',unavailableTimeSlots)
	const availableTimeSlotsLessUnavailableTimeSlots = timeSlotDifference(availableTimeslots, unavailableTimeSlots)


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
					Запись на приём к психологу в Минске
				</motion.h1>
				<motion.h2
					className='text-white sd:text-4xl xy:text-xl font-bold sd:mt-10 xy:mt-12'
					variants={titleAnimation}
				>
					Выберите дату и время для записи
				</motion.h2>
				<motion.p className='sd:mt-20 xy:mt-6 font-light tracking-wide xy:text-sm sd:text-base'>
					Консультация может проходить как онлайн (через телефон или компьютер), так и оффлайн с посещением кабинета, который находится возле Национальной библиотеки (ст. метро "Восток"), цена при этом не меняется.
				</motion.p>
			</motion.div>

			<div className='flex flex-col sd:px-10 xy:px-5 mt-12'>

				{
					screens.lg &&
					<div className='mb-6 text-right'>
						<Button type="primary"
							className=''
							onClick={() => {
								setOpen(true)
							}}
							icon={<QuestionCircleOutlined />}
						>
							нужна помощь
						</Button>
					</div>
				}

				<div
					className=''
					ref={ref1}
				>
					<ScheduleMeeting
						borderRadius={10}
						primaryColor="rgb(101,163,13)"
						eventDurationInMinutes={180}
						backgroundColor='#ddd'
						// eventStartTimeSpreadInMinutes={120}
						availableTimeslots={availableTimeSlotsLessUnavailableTimeSlots}
						lang_goToNextAvailableDayText="перейти на следующий день"
						onStartTimeSelect={f1}
						format_startTimeFormatString={'HH:mm'}
						locale={ru}
						lang_emptyListText={<div className=''>
							<Empty description={
								<span>
									На выбранную дату, все записи расписаны.
								</span>} />
							{/* <p className='mt-5 px-4 text-sm text-center'></p> */}
						</div>}
						format_nextFutureStartTimeAvailableFormatString="d LLL, cccc"
						format_selectedDateDayTitleFormatString="d LLL, cccc"
					// startTimeListStyle='scroll-list'

					/>
				</div>


				<div className='mt-10' ref={ref2}>
					{
						(value || open) &&
						<div className='font-light'>
							{
								!open &&
								<p>{`Ваш выбор: ${value.toLocaleDateString("ru-RU")} в ${value.toLocaleTimeString("ru-RU")}`}</p>
							}
							<Divider />

							<FormZapisUser value={value} ref={ref3} setOpen={setOpen} setValue={setValue} />

							<Divider />

							<p className='text-sm text-gray-500'>
								Если будут какие-либо изменения в расписании, я Вам перезвоню для согласования новой удобной для Вас даты и время.
							</p>
						</div>

					}

				</div>

			</div>



			<article className='sd:px-10 xy:px-5 py-10 bg-[#191c1d] mt-28'>
				<div className=''>
					<motion.div
						className=''
						initial="hidden"
						whileInView="visible"
					>
						<motion.div
							className=''
							variants={yCustomAnimation}
							custom={1}
						>
							<h3 className='text-white text-2xl font-light tracking-wider'>
								Как записаться на приём к психологу в Минске
							</h3>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Выше форма, Выберите дату и время когда Вам будет удобно, напишите свое имя и телефон, нажмите кнопку "записаться". Вот и все Вы записались на консультацию к психологу. Поздравляю, Вы сделали шаг к прекрасной жизни и прекрасному настроению.
							</p>

						</motion.div>
						<motion.div
							className='pt-10'
							variants={yCustomAnimation}
							custom={3}
						>
							<h3 className='text-white text-2xl font-light tracking-wider'>
								Как записать на консультацию к психологу ребенка
							</h3>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Детей возрастом до 12 лет на консультацию к психологу могут записывать их родители. После 12 лет ребенка можно будет записывать на прием только после его согласия. В противном случае консультирование не имеет смысла по той же причине, что и со взрослыми людьми.
							</p>

						</motion.div>
						<motion.div
							className='pt-10'
							variants={yCustomAnimation}
							custom={5}
						>
							<h3 className='text-white text-2xl font-light tracking-wider'>
								Как записать на консультацию к психологу ребенка
							</h3>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Детей возрастом до 12 лет на консультацию к психологу могут записывать их родители. После 12 лет ребенка можно будет записывать на прием только после его согласия. В противном случае консультирование не имеет смысла по той же причине, что и со взрослыми людьми.
							</p>

						</motion.div>
						<motion.div
							className='pt-10'
							variants={yCustomAnimation}
							custom={7}
						>
							<h3 className='text-white text-2xl font-light tracking-wider'>
								Запись на прием у психологу, когда один из супругов против
							</h3>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Далеко не всегда среди супругов отмечают единое мнение по поводу помощи психолога: чаще всего один всегда «за», а второй утверждает, что ему это не нужно и неинтересно.
								Записывать человека в данном случае против его волы – бесперспективная затея. Если Вы желаете записать на консультацию человека, с которым у Вас возникли определенные трудности, специалисту будет эффективнее работать Вами. В результате удастся уладить конфликт через человека, который демонстрирует собственное желание все разрешить, а не с тем, кто намеренно отказывается от психологической помощи.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</article>

			<Tour
				open={open}
				onClose={() => setOpen(false)}
				steps={steps}
			/>
		</section>
	)
})

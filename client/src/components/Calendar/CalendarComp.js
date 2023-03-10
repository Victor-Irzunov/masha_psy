import { useState, useContext } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/ru'
import 'moment-timezone'
import { FloatButton } from 'antd'
import {
	RightOutlined, LeftOutlined,
	UnorderedListOutlined,
	PlusOutlined, EditOutlined,
} from "@ant-design/icons"
import { Context } from '../../App'
import { DrawerWindow } from '../../components/drawerWindow/DrawerWindow'

moment.tz.setDefault('Europe/Moscow')

const localizer = momentLocalizer(moment)




// const formats = {
// 	// eventTimeRangeFormat: () => "Запись",
// 	dayRangeHeaderFormat: function (_ref3, culture, local) {
// 		var start = _ref3.start;
// 		var end = _ref3.end;
// 		return (
// 			local.format(start, "D MMM YYYY", culture) +
// 			" - " +
// 			local.format(end, "D MMM YYYY", culture)
// 		);
// 	}
// };

const CalendarComp = (props) => {
	const [open, setOpen] = useState(false)
	const { dataApp } = useContext(Context)
	const [isActive, setIsActive] = useState({
		add: false,
		edit: false
	})

	let events = []

	if (dataApp.dataZapisi) {
		events = dataApp.dataZapisi
	}

	const showDrawer = () => {
		setOpen(true)
	}


	return (
		<>
			<FloatButton.Group
				shape="circle"
				style={{
					right: 24,
				}}
			>
				<FloatButton
					icon={<PlusOutlined />}
					type="primary"
					onClick={() => {
						showDrawer()
						setIsActive({ ...isActive, add: true, edit: false })
					}}
				/>
				<FloatButton
					icon={<EditOutlined />}
					type="primary"
					onClick={() => {
						showDrawer()
						setIsActive({ ...isActive, add: false, edit: true })
					}}
				/>
			</FloatButton.Group>

			<section className='pt-10 pb-20'>
				<Calendar
					localizer={localizer}
					events={events}
					defaultView="month"
					// startAccessor="start"
					endAccessor="end"
					style={{ height: "100vh", background: "#fff", padding: "5px", borderRadius: "10px" }}
					messages={{
						next: (<RightOutlined />),
						previous: (<LeftOutlined />),
						today: "сегодня",
						month: "месяц",
						week: "неделя",
						day: "день",
						agenda: (<UnorderedListOutlined />),
						date: "дата",
						time: "время",
						event: "событие",
						noEventsInRange: 'Мария у Вас на эту дату нет событий!',
						allDay: "Весь день",
					}}
					startAccessor={(event) => { return new Date(event.start) }}
				/>
			</section>

			<DrawerWindow open={open} setOpen={setOpen} isActive={isActive} />
		</>
	)
}

export default CalendarComp
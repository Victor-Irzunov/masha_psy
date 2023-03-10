import infertility from '../images/imgSection/infertility.jpg'
import family from '../images/imgSection/family.jpg'
import child from '../images/imgSection/child.jpg'
import woman from '../images/imgSection/woman.jpg'
import psychologistTherapy from '../images/imgSection/psychologistTherapy.jpg'
import clinik from '../images/imgSection/clinik.jpg'
import depression from '../images/imgSection/depression.jpg'
import { HomeOutlined } from '@ant-design/icons'

export const itemsSection = [
	{
		id: 1,
		img: infertility,
		nav: '#бесплодие',
		title: 'Не могу забеременеть',
		content: 'У тебя нет больше сил и нужна помощь?',
		link: '/besplodie',
		navId: 'besplodie'
	},
	{
		id: 2,
		img: family,
		nav: '#семейные проблемы',
		title: 'Проблемы в семейных отношениях',
		content: 'У тебя нет больше сил и нужна помощь?',
		link: '/uslugi/semeinii-psikholog',
		navId: 'semeiya',
	},
	{
		id: 3,
		img: child,
		nav: '#проблемы у подростка',
		title: 'Проблемы у ребенка',
		content: 'Не знаешь что дальше делать и тебе нужна помощь?',
		link: '/uslugi/psikholog-dlya-podrostka',
		navId: 'podrostok',
	},
	{
		id: 4,
		img: woman,
		nav: '#женский психолог',
		title: 'Проблемы у женщины',
		content: 'Ты уcтала и нет больше сил?',
		link: '/',
		navId: 'zhenskij',
	},
	{
		id: 5,
		img: clinik,
		nav: '#клинический психолог',
		title: 'Клинический психолог',
		content: 'Трудно понять проблема со здоровьем или с психологический состоянием.',
		link: '/',
		navId: 'klinicheskij',
	},
	{
		id: 6,
		img: depression,
		nav: '#депрессия',
		title: 'Депрессия',
		content: 'У Вас угнетённое, подавленное, тоскливое, тревожное, боязливое или безразличное — настроение и снижение или утрата способности получать удовольствие?',
		link: '/',
		navId: 'depressiya',
	},
]

export const textCollapse = [
	{
		id: 1,
		title: 'Кто такой психолог?',
		content: 'Психолог имеет ученую степень в области науки о человеческом поведении. Многие психологи имеют профессиональную подготовку и клинические навыки для оценки и лечения вашего психического здоровья с помощью психотерапии (разговорной терапии), психологической оценки и тестирования. Психологи помогают людям научиться более эффективно справляться с проблемами в жизни и отношениях, а также с психическими заболеваниями.',
	},
	{
		id: 2,
		title: 'Кто такой клинический психолог?',
		content: `Клиническая психология – это область психологии. Он характеризуется глубоким знанием широкого спектра областей психологии и за ее пределами. Клиническая психология охватывает все возрасты, множественные различия и более тяжелые состояния психического здоровья.

		Клинический психолог имеет специализированную и обширную подготовку для оказания комплексной психологической и поведенческой помощи отдельным лицам и семьям. Клинические психологи могут работать во многих условиях, в том числе:
		
		Школы.
		Больницы и поликлиники.
		Консультационные центры.
		Общественные организации.`,
	},
	{
		id: 3,
		title: 'В чем разница между психологом и клиническим психологом?',
		content: `Хотя профессии психолога-консультанта и клинического психолога во многом пересекаются, ключевое различие заключается в том, что клинический психолог больше занимается психопатологией (изучением состояний психического здоровья); в то время как психолог-консультант помогает людям справляться с эмоциональными, социальными и физическими стрессорами в их жизни.

		Другими словами, клинический психолог обычно помогает с более серьезными проблемами психического здоровья, чем психолог или психолог-консультант.
		
		Некоторые эксперты считают, что для этих специалистов в области психического здоровья не должно быть двух разных терминов.`,
	},
	{
		id: 4,
		title: 'Чем занимается психолог?',
		content: `Психологи помогают широкому кругу людей и могут лечить многие виды проблем с поведением и психическим здоровьем. Они также могут помочь с проблемами в жизни и отношениях.

		Некоторые люди могут обратиться к психологу, потому что они чувствуют себя подавленными или беспокойными, или им не хватает уверенности в себе в течение длительного времени. Другие могут обратиться к психологу, потому что у них есть краткосрочная проблема, с которой им нужна помощь, например, чувство подавленности на новой работе или трудности с любимым человеком.
		
		Психологи также часто включаются в комплексную помощь людям с заболеваниями. Например, они могут помочь людям с проблемами сна, хронической болью или пищевым поведением или людям, борющимся с хроническим заболеванием.
		
		Психологи могут предоставить тесты и оценки, которые могут помочь диагностировать состояние или рассказать больше о том, как человек думает, чувствует и ведет себя. `,
	},
	{
		id: 5,
		title: 'С чем можно обратиться к психологу?',
		content: `Ваш психолог может помочь в лечении нескольких различных психических и поведенческих заболеваний, а также помочь вам справиться с различными жизненными стрессорами. Эти проблемы могут быть долгосрочными или краткосрочными.

		Ситуации и состояния, при которых вы можете обратиться к психологу, включают:
		
		Расстройство, связанное с употреблением алкоголя, и другие расстройства, связанные с употреблением психоактивных веществ.
		Вопросы гнева .
		Беспокойство .
		Дисморфическое расстройство тела .
		Справиться с новым диагнозом или справиться с хроническим заболеванием .
		Депрессия .
		Расстройства пищевого поведения .
		Проблемы семьи и отношений.
		Игровое расстройство .
		Гендерная дисфория .
		Расстройство накопления .
		Горе и утрата.
		Проблемы с успеваемостью на работе или в школе.
		Ожирение .
		Боль.
		Посттравматическое стрессовое расстройство (ПТСР) .
		Послеродовая депрессия .
		Нарушения сна .
		Управление стрессом .
		Проблемы с уверенностью в себе.
		Фобии.
		Нездоровые привычки.
		Травма.
		Хотя обращение за помощью в связи с психическим здоровьем и поведенческими расстройствами может быть трудным и утомительным, очень важно, чтобы вы это сделали. Психические расстройства очень распространены, и ваше психическое и эмоциональное здоровье так же важно, как и ваше физическое здоровье. `,
	},
	{
		id: 6,
		title: 'В чем разница между психологом и психиатром?',
		content: `Психиатр — это врач, который может диагностировать и лечить психические заболевания. Они могут назначать лекарства и другие медицинские процедуры.

		Психолог имеет докторскую степень (PhD или PsyD) и часто имеет обширную подготовку в области исследований или клинической практики. Психологи лечат психические расстройства с помощью психотерапии (разговорной терапии). Психолог обычно не может прописать лекарства.
		
		Психиатры обычно лечат более сложные психические расстройства, чем психологи, особенно те, которые требуют медикаментозного или медицинского лечения.
		
		С другой точки зрения, психология — это изучение разума, эмоций и поведения; тогда как психиатрия - это область медицины, ориентированная на диагностику и лечение психических заболеваний.
		
		`,
	},
	{
		id: 7,
		title: 'Кто такой перинатальный психолог?',
		content: `Перинатальный психолог - это специалист, который занимается всем тем, что касается сферы зачатия, беременности, родов и послеродового периода у женщины, ее взаимоотношений с отцом ребенка, а также отношений ребенка с родителями (период от зачатия до 3х лет).`,
	},
]

export const navBar = [
	
	{
		link: '/',
		label: (<HomeOutlined className='text-xl'/>),
		key: 0
	},
	{
		link: '/супер-админка',
		label: 'Админка',
		key: 1
	},
	
	// {
	// 	link: '/бесплодие',
	// 	label: 'бесплодие',
	// 	key: 1
	// },
	// {
	// 	link: '/семейный-психолог',
	// 	label: 'семейный психолог',
	// 	key: 2
	// },
	// {
	// 	link: '/психолог-для-подростка',
	// 	label: 'подростковый психолог',
	// 	key: 3
	// },
	{
		link: '/услуги',
		label: 'мои услуги',
		key: 2
	},
	
	{
		link: '/цена-психолога',
		label: 'стоимость',
		key: 3
	},
	{
		link: '/запись-к-психологу',
		label: 'записаться',
		key: 4
	},
	{
		link: '/блог/психология',
		label: 'мои статьи',
		key: 5
	},
	// {
	// 	link: '/группы',
	// 	label: 'группы',
	// 	key: 6
	// },
	{
		link: '/мария-в-средствах-массовой-информации',
		label: 'я в СМИ',
		key: 7
	},
	{
		link: '/обо-мне',
		label: 'обо мне',
		key: 8
	},
	{
		link: '/otzyvy',
		label: 'отзывы',
		key: 9
	},
	{
		link: '/психолог-контакты',
		label: 'контакты',
		key: 10
	},

]


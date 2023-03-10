import React from 'react'
import { motion } from "framer-motion"
import { titleAnimation, titleAnimation2,yAnimation,yCustomAnimation } from '../../constans/animation/AnimationConst'
import questions from '../../images/main/man-question.png'
import online from '../../images/main/online.webp'
import consultation from '../../images/main/consultation.webp'
import goodPsychologist from '../../images/main/good-psychologist.webp'

export const ContentSection = () => {
	return (
		<article>
			<section className='sd:px-10 xy:px-5 py-10'>
				<div className='container'>
					<motion.div
						className='mb-20'
						initial="hidden"
						whileInView="visible"
					>
						<motion.div
							className=''
							variants={yCustomAnimation}
							custom={1}
						>

							<h2 className='text-black text-3xl font-semibold tracking-wider'>Чем может помочь психолог?</h2>
						</motion.div>
						<motion.div
							className='relative'
							variants={yCustomAnimation}
							custom={2}

						>
							<img src={questions} className='mb-3 float-right w-8/12' />
							<p className='text-black font-light'>
								Каждый человек — неповторимый и сложно устроенный организм. И, как только один из его элементов выходит из строя, начинает давать сбой вся система. Именно так довольно часто случается в нынешнем мире, переполненном стрессами и непредсказуемостью. Семья, работа, личное пространство — трудно удерживать все эти аспекты нашей жизни в полной гармонии.
								Поддержать вас на жизненном пути сможет специалист, который видит ситуацию со стороны и во всей полноте. Именно он предоставит вам ту поддержку, которая необходима, и в подходящий для этого момент.Иногда в жизни бывают моменты, когда мы делаем привычные вещи, но сталкивается с неприятными для нас результатами. Мы чувствуем неудовлетворенность, усталость, обиду и непонимание со стороны близких людей. Мир начинает понемногу распадаться на кусочки, а восстановить равновесие бывает не так просто. Если что-то подобное происходит в вашей жизни, это может быть знаком, что стоит обратиться за помощью к психологу. Психологическая консультация — это как правило краткосрочная помощь, которая помогает решить определенные ситуации и проблемы. В течение нескольких встреч с психологом (обычно от 2 до 5) Вы получите ответы на свои вопросы и ощутите поддержку в переживании нового для себя опыта. Длительность приема варьируется от 50 до 55 минут в зависимости от метода, в котором работает специалист.</p>

							<p className='text-black font-light'>Более основательная работа с личностью проводится на следующем уровне — индивидуальной психотерапии. Она работает на более глубинном уровне, чем психологическая консультация. В этом случае стоит записаться на прием к психотерапевту (пожалуйста, не путайте с психиатром!). Наши подруги как «бытовые психологи», в отличие от профессиональных пытаются подавить наши неприятные чувства и советуют просто выкинуть из головы неприятные события, проигнорировать их. Например, поругался человек с кем — то, или девушка переживает по поводу лишнего веса. Как обычно утешают друзья?  За советом к подруге или психологу?</p>

							<p className='text-black font-light'>Обычно объясняют, что ничего на самом деле не случилось: «Все это глупости. Ничего страшного. Не думай об этом». Таким образом близкие стараются убедить нас в том, что «того, что с тобой случилось, на самом деле не случилось», обесценивая наши переживания.</p>

							<p className='text-black font-light'>И все бы ничего, если это действительно пустяковое переживание, а если человек на самом деле очень страдает? Как вести себя у психолога?</p>

							<p className='text-black font-light'>Чем может помочь психолог

								Иногда «житейские психологи» пытаются такого страдальца насильно развеселить, чтобы он думал о приятном. Бывает, что используют так называемый «волшебный пендель», который считается чрезвычайно мотивирующим и стимулирующим.
								Такие слова как «Что ты нюни распустил? Ты еще беды не знал?» действует по принципу энергетических напитков, которые кратковременно тонизируют. Но когда действие «волшебных слов» заканчивается, человек может чувствовать упадок сил и опустошенность.</p>
							<h3 className='text-black font-light'>
								Чем же психолог может помочь на самом деле?
							</h3>
							<h5 className='text-black font-light'>
								Особенности профессиональной психологической помощи:
							</h5>
							<p className='text-black font-light'>
								1. Психолог принимает всерьез то, насколько для человека важны случившиеся с ним события и его чувства по поводу этих событий. Разрушаем мифы о психологах
							</p>
							<p className='text-black font-light'>
								2. Психолог может помочь человеку признать факт, который вызвал бурную эмоциональную реакцию, что она существует на самом деле и что переживаемые эмоции естественны, и имеют право на существование, каким бы ни был повод и какими бы эти эмоции ни были. Ведь даже самые радостные события могут вызвать самые неожиданные эмоции.  Психологические эффекты
							</p>
							<p className='text-black font-light'>
								3. Психолог всегда выслушает, тем самым помогает людям выговориться, проговорить свои чувства, и облегчить душу от страданий и переживаний.
								Психолог помогает людям высказаться, наговориться «от души»,  он выслушает все, даже то, о чем человек стесняется рассказать самым близким!!</p>
							<p className='text-black font-light'>
								Родные люди обычно искренне считают, что они должны не только выслушать, но и выразить собственное мнение и посоветовать, что делать, причем советы их достаточно субъективны. Психолог может помочь людям разобраться со своими чувствами, не оценивая их.

								4. Психолог помогает человеку принять свое решение.

								Даже если оно будет не самым оптимальным и не самым взвешенным – но за свое собственное решение, самостоятельно выстраданное, человек готов бороться до конца.
								Психолог, в отличие от советов подруги, может помочь поддержать человека в его собственной работе над принятием решений в собственной жизни.

								5. Психолог может помочь в формировании здоровой самооценки, уверенности в себе, решительности и других важных для людей личностных качеств. Секреты уверенности в себе

								6. В создавшейся конфликтной ситуации психолог также может помочь людям эффективно ее разрешить, подсказав вероятные способы и пути выхода из любого конфликта.
								7. Оказавшись в тяжелой психотравмирующей ситуации, человеку может помочь исключительно психолог — профессионал. Имея опыт работы с психотравматическим стрессом, психолог может помочь эффективно преодолеть все болезненные симптомы человека.

								Как помогает психолог ребёнку?
								Психолог может помочь ребенку справиться с любыми возрастными новообразованиями: становление и развитие личности, сознания и самосознания, мировоззрения; психолог может способствовать формированию здоровых убеждений и принципов подрастающего человека.

								Психолог может научить ребенка преодолевать жизненные трудности, а также способам эффективной коммуникации и разрешения конфликтов. И многое другое.

								На вопрос «Помогают ли психологи?» каждый находит свой ответ самостоятельно

								Кто — то прислушивается к мнению друзей о психологах, кто — то составляет мнение из прочитанных статей, и как доказывает практика люди до сих пор склонны к стереотипам в отношении психологов. И только реальная помощь настоящего психолога поможет вам ответить для самого себя на этот вопрос.
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						className='mb-6'
						initial="hidden"
						whileInView="visible"
					>
						<motion.div
							className=''
							variants={yCustomAnimation}
							custom={1}
						>
							<h2 className='text-black text-3xl font-semibold  tracking-wider'>
								Консультация психолога в Минске лично и по скайпу
							</h2>
						</motion.div>
						<motion.div
							className=''
							variants={yCustomAnimation}
							custom={2}
						>
							<img src={online} className='mb-3 float-left w-1/3' />
							<p className='text-black font-light text-right'>
								Очно я принимаю в Минске в возле метро. На дом или на место, указанное клиентом не выезжаю. Для онлайн консультаций я использую skype!). Если у Вас нет возможности записаться на очное консультирование ко мне, Вы можете воспользоваться психотерапевтической поддержкой по Skype. Онлайн-консультация очень удобная. Благодаря возможности общения со специалистом дистанционно – Вы можете решить свою проблему, не выходя из дома.
								Психологическая помощь онлайн имеет такой же эффект, как и личная встреча с профессионалом, несмотря на некоторые ограничения. Главное из них – отсутствие возможности отследить все телесные реакции клиента, которые дают полноту понимания проблемной ситуации. Несмотря на это, мой личный опыт психотерапевта онлайн показывает, что такое общение приводит к прекрасному результату и помогает моим клиентам решить их проблемы.
								Онлайн-сеанс происходит в режиме видеосвязи. Это необходимо для визуального контакта и создания доверительных отношений. Я гарантирую полностью конфиденциальный разговор. Вы сами можете выбрать удобное время для общения и записаться на консультацию психолога онлайн.
								Онлайн-консультация – идеальный способ своевременного решения психологических проблем, где бы Вы не находились!
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						className='mb-20 mt-20'
						initial="hidden"
						whileInView="visible"
					>
						<motion.div
							className=''
							variants={yCustomAnimation}
							custom={1}
						>
							<h2 className='text-black text-3xl font-semibold tracking-wider'>
								Как проходит консультация психолога
							</h2>
						</motion.div>
						<motion.div
							className=''
							variants={yCustomAnimation}
							custom={2}
						>
							<img src={consultation} className='float-right w-1/3' />
							<p className='text-black font-light'>
								Первая консультация, как правило – диагностическая. . На ней мы знакомимся, клиент рассказывает, что его привело на консультацию, какую помощь он ожидает и что хотел бы решить. Вместе мы определяем запрос клиента, порядок нашей последующей работы, договариваемся о продолжительности и времени работы. Необязательно проживать сложные жизненные ситуации наедине. Время от времени трудности возникают у всех и это нормально. В такой момент не нужно закрываться в себе, а лучше обратиться за помощью к опытному специалисту.
								На индивидуальной психологической консультации мы подробно разберем каждую ситуацию, которая Вас волнует. Обратившись ко мне, Вы получите 100% внимание, профессиональную поддержку, комфортное общение, возможность разобраться в себе, наладить свое эмоциональное состояние и выйти на новый уровень жизни!
								Индивидуальный психотерапевт помогает найти первопричины проблем. Часто они спрятаны глубоко в сознании человека и определить их самостоятельно без специального психологического опыта – невозможно. Я, как индивидуальный психолог, использую лучшие психологические методики, чтобы решить каждую проблему, с которой ко мне обращается клиент. Если Вы решили обратиться к психологу, но не уверены, какой формат общения Вам подойдет, тогда индивидуальное психологическое консультирование – прекрасная возможность сделать первый шаг к своему душевному исцелению!

							</p>
							<p className='text-black font-light'>
								Длительность работы (количество встреч). очень зависит от характера проблемы, с которой мы работаем, от индивидуальной истории и особенностей клиента, а так же от той скорости, с которой он сам готов двигаться в нашей работе. Кроме того, часто бывает ситуация, когда клиент обратился с одним запросом, в который, как ему кажется, упирается его проблема, но в процессе работы он формулируется по-другому, или разбивается на несколько. Для решения запроса нам может понадобятся от 2 до 10 встреч или более длительная работа. Это зависит от запроса клиента и насколько проблема глубокая. Например, за 1-2 встречи мы можем проработать ситуацию в личных отношениях, на работе не углубляясь в структуру личнсоти клиента. По возможности  я отдаю приоритет краткосрочной терапии: когда клиент обращается с конкретным запросом, и мы фокусируемся на его решении.

							</p>
						</motion.div>
					</motion.div>
					<motion.div
						className='mb-6'
						initial="hidden"
						whileInView="visible"
					>
						<motion.div
							className=''
							variants={yCustomAnimation}
							custom={1}
						>
							<h2 className='text-black text-3xl font-semibold tracking-wider'>
								Как выбрать хорошего психолога для себя или своего ребенка?
							</h2>
						</motion.div>
						<motion.div
							className=''
							variants={yCustomAnimation}
							custom={2}
						>
							<img src={goodPsychologist} className='mb-3 float-left w-1/3' />

							<p className='text-black font-light'>
								Психолог, предоставляющий профессиональные услуги, должен имеет базовое образование в области психологии, педагогики, или медицины, а также специализированное образование в области психотерапии (гештальт, психоанализ, когнитивно-бихевиоральный подход, психодрамма, и многое другое).
							</p>
							<p className='text-black font-light'>
								согласно требованиям учебных программ по психотерапии, психотерапевт сам проходит личную терапию у другого психолога, для разрешения личных проблем. Не бойтесь спрашивать психолога – «имеете ли Вы сами опыт прохождения индивидуальной терапии»? Это очень важно!
							</p>
							<p className='text-black font-light'>
								профессиональный психотерапевт имеет постоянную поддержку в виде супервизии (психотерапия для психотерапевтов, поиск новых возможностей, при возникновении сложностей в работе с клиентами).
							</p>
							<p className='text-black font-light'>
								ак выбрать психолога среди мужчины или женщины? Вопрос очень тонкий, точный ответ на который не всегда удается найти при первых встречах. Я бы больше посоветовал ориентироваться для начала на собственных ощущениях. Ответьте для себя на такой вопрос: «как ты чувствуешь, с кем тебе будет находиться рядом безопаснее, спокойнее - мужчиной психологом, или женщиной?». Некоторые клиенты ориентируются на то в выборе психолога, какой у них запрос на терапию. Если у них сложности в построении отношений с противоположным полом, допустим – мужчиной, то выбор психолога мужчины, имеет под собой рациональное зерно.
							</p>
							<p className='text-black font-light'>
								как выбрать психолога по возрасту? Кто-то из клиентов ищет себе психотерапевта среди «молодых», среди ровесников, кто-то принципиально отдает предпочтение людям преклонного возраста, еврейской национальности, с бородой и очками, обязательным атрибутом – курительной трубкой. Дело по сути каждого! Если у вас есть предположение, что качество психотерапии зависит напрямую от возраста психолога, то по своему опыту знаю, что это не всегда является таковым.
							</p>
							<p className='text-black font-light'>
								если у Вас есть определенная тема, с которой хотелось бы обратиться к психологу, и решить ее, можно при первичном знакомстве (телефонном звонке), спросить психолога: «имеете ли Вы опыт работы с аналогичной темой?» Это весьма распространенная процедура, и к подобным вопросам психологи относятся с большим вниманием и пониманием.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</article>
	)
}

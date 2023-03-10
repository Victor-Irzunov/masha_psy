import React from 'react';
import { Collapse, Button } from 'antd'
import { textCollapse } from '../../constans/Constans'
import { motion } from "framer-motion"
import PopoverInfo from '../popoverInfo/PopoverInfo'
import { useScreens } from '../../constans/constScreens'
import { Link as LinkScroll } from 'react-scroll'
const { Panel } = Collapse;




const QuestionsMainPage = () => {
	const screens = useScreens()

	const blockAnimation = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delay: 0.7,
				duration: 1
			},
		}
	}


	return (
		<motion.section
			className='sd:px-10 xy:px-5 py-10 bg-white overflow-hidden'
			initial="hidden"
			whileInView="visible"
			id='voprosy'
		>
			<motion.div
				variants={blockAnimation}
			>
				<h3 className='sd:text-6xl xy:text-2xl font-extrabold'>Часто задаваемые вопросы</h3>
				<Collapse
					ghost
				// onChange={() => setIsVisible(i => !i)}
				>
					{textCollapse.map(el => {
						return (
							<Panel
								header={el.title}
								key={el.id}
								showArrow={false}
								className='sd:text-xl xy:text-base font-extralight sd:pl-7 xy:pl-2'
							>
								{/* <AnimatePresence>
								{
									isVisible && */}
								<p
								// initial={{ height: 0, opacity: 0 }}
								// animate={{ height: 'auto', opacity: 1 }}
								// exit={{ height: 0, opacity: 0 }}
								>
									{el.content}
								</p>
								{/* } */}
								{/* </AnimatePresence> */}
							</Panel>
						)
					})}
				</Collapse>


				<div className='flex justify-start items-center pl-10 mt-10'>
					<Button
						type='primary'
						shape="round"
						size={screens.lg ? 'large' : 'middle'}
						className='mr-6'
					>
						<LinkScroll
							to='vopros'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
						>
							задать вопрос
						</LinkScroll>
					</Button>
					<PopoverInfo />
				</div>
			</motion.div>
		</motion.section>
	)
}
export default QuestionsMainPage
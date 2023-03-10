// Photos from https://citizenofnowhe.re/lines-of-the-city
import { useRef } from "react";
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import { ArrowRightOutlined } from '@ant-design/icons'
import { itemsSection } from "../../constans/Constans";
import { Link } from 'react-router-dom'



function useParallax(value, distance) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageComp({ image, title, alt }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 600);

	return (
		<div>
			<div ref={ref}>
				<img src={image} alt={alt} className="" />
			</div>
			<motion.div style={{ y }} className='w-8 h-8 p-2 rounded-full bg-black text-white'>#{title}</motion.div>
		</div>
	);
}

export default function SectionMainPage() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	})

	const cardVariants = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.9
			},
		}
	}

	return (
		<section
			className="sd:px-20 xy:px-5"
		>

			{itemsSection.map(el => {
				return (
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{
							// once: true,
							amount: 0.7
						}}
						className="overflow-hidden"
					>
						<motion.div
							key={el.id}
							id={el.navId}
							className="flex py-6 border-t border-[#bcbdbe] overflow-hidden"
							variants={cardVariants}
						>
							<a href="/#" id={el.navId} >{''}</a>
							<div className="w-1/2 pl-0 pr-4">
								<ImageComp image={el.img} title={el.id} alt={el.title} />
							</div>
							<div className="w-1/2">
								<h2 className="sd:text-4xl xy:text-xl font-bold ">{el.title}</h2>
								<h3 className="sd:text-xl xy:text-sm text-white">{el.content}</h3>
								<Link to={el.link} className="duration-150 sd:text-lg xy:text-xs mt-10 hover:mr-2">перейти на страницу </Link><ArrowRightOutlined className="sd:text-sm xy:text-xs ml-1" />
							</div>
						</motion.div>
					</motion.div>
				)
			})}

			<motion.div className="fixed left-0 right-0 h-1 bg-white bottom-2" style={{ scaleX }} />
		</section>
	);
}


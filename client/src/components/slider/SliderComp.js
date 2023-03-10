import React from 'react'
import { Carousel,Image } from 'antd'
import slider1 from '../../images/slider/slider-1.png'
import slider2 from '../../images/slider/slider-2.png'
import slider3 from '../../images/slider/slider-3.png'
import slider4 from '../../images/slider/slider-4.png'




// const contentStyle = {
// 	height: '160px',
// 	lineHeight: '160px',
// 	textAlign: 'center',
// };
const SliderComp = () => (
	<Carousel autoplay dots={false}>
		<div>
			<Image src={slider1} preview={false} />
		</div>
		<div>
		<Image src={slider2} preview={false}  />
		</div>
		<div>
		<Image src={slider3}preview={false}   />
		</div>
		<div>
		<Image src={slider4}preview={false}   />
		</div>
	</Carousel>
);
export default SliderComp
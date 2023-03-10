import {
	InstagramOutlined,
	YoutubeOutlined,
	WhatsAppOutlined,
} from '@ant-design/icons'
import { Space, Tag } from 'antd'
import React from 'react'
import Telegram from './img/Telegram.js'
import Viber from './img/Viber.js'

const SocialComp = () => (
	<Space size={[8, 16]} wrap>

		<Tag icon={<InstagramOutlined />} color="#e1306c">
			Instagram
		</Tag>

		<Tag icon={<Telegram />}
			color="transparent"
		>
		</Tag>

		<Tag icon={<WhatsAppOutlined />}
			color="#29b73f"
		>
			WhatsApp
		</Tag>

		<Tag icon={<Viber />}
			color="transparent"
		>
		</Tag>

		<Tag icon={<YoutubeOutlined />} color="#cd201f">
			Youtube
		</Tag>

	</Space>
);
export default SocialComp



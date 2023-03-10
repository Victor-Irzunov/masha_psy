import { Button, Form, Input, message, Popconfirm, InputNumber, DatePicker, Radio, Upload,Image } from 'antd'
import React, { useEffect, useState } from 'react'
import { changeOneArticle, deleteOneArticle } from '../../../../http/articleAPI'
import ReactEditor from '../../../react-quill/ReactEditor'
import moment from 'moment'
import { UploadOutlined } from '@ant-design/icons'
import Resizer from "react-image-file-resizer"

const resizeFile = (file, size, size2, quality = 75) =>
	new Promise((resolve) => {
		Resizer.imageFileResizer(
			file,
			size,
			size2,
			"WEBP",
			quality,
			0,
			(uri) => {
				resolve(uri)
			},
			"file",
		)
	})

const { RangePicker } = DatePicker

const FormChangeArticlesPage = ({ article }) => {
	// const [textArticle, setTextArticle] = useState('')
	const [value, setValue] = useState(article)
	const [form] = Form.useForm()

	// useEffect(() => {
	// 	setTextArticle(article.article)
	// }, [article])

	const onFinish = async (values) => {
		console.log('Success:', values)

		const formData = new FormData()
		formData.append('link', values.link)
		formData.append('article', values.article)
		formData.append('publication', values.publication)
		formData.append('view', values.view)
		formData.append('group', values.group)
		formData.append('description', values.description)
		formData.append('like', values.like)
		formData.append('id', article.id)
		if (values.dateTime) {
			formData.append('dateTime', values.dateTime.$d)
		}
		if (values.img) {
			for (let k in values.img.fileList) {
				const pic = await resizeFile(values.img.fileList[k].originFileObj, 1000, 600, 100)
				formData.append('img', pic)
			}
		}

		changeOneArticle(formData)
			.then(data => {
				message.success(data.message)
			})
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}
	const deletePage = () => {
		deleteOneArticle(article.id)
			.then(data => {
				message.success(data.message)
				form.resetFields()
			})
	}


	return (
		<Form
			name="info-pages"
			labelCol={{
				span: 24,
			}}
			wrapperCol={{
				span: 24,
			}}
			form={form}
			initialValues={{
				link: article.link,
				publication: article.publication,
				view: article.view,
				article: article.article,
				group: article.group,
				description: article.description,
				like: article.like,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Изменить название ссылки меню"
				name="link"
				rules={[
					{
						required: true,
						message: 'Введите название ссылки меню!',
					},
				]}
			>
				<Input />
			</Form.Item>


			<Form.Item
				label="Изменить описание"
				name="description"
			>
				<Input />
			</Form.Item>

			<div className='w-1/5 mr-7'>
				<Image src={process.env.REACT_APP_API_URL + JSON.parse(article.img)[0].img}
					className='rounded-md shadow-2xl'
					preview={false}
				/>
			</div>

			<Form.Item
				label="Изменить фото"
				name="img"
			>
				<Upload
					listType="picture"
					className="upload-list-inline"
				>
					<Button icon={<UploadOutlined />}>Загрузить</Button>
				</Upload>
			</Form.Item>


			<Form.Item
				label="Изменить количество просмотров"
				name="view"
			>
				<InputNumber />
			</Form.Item>


			<Form.Item
				label="Изменить количество лайков"
				name="like"
			>
				<InputNumber />
			</Form.Item>


			<Form.Item
				label="Изменить тему статьи"
				name='group'
			>
				<Radio.Group>
					<Radio.Button value="1">Бесплодие</Radio.Button>
					<Radio.Button value="2">Семейные</Radio.Button>
					<Radio.Button value="3">Женский</Radio.Button>
					<Radio.Button value="4">Депрессия</Radio.Button>
					<Radio.Button value="5">Подростоковый</Radio.Button>
					<Radio.Button value="6">Клинический</Radio.Button>
				</Radio.Group>
			</Form.Item>

			{
				article.dateTime ?
					<p className='mt-10 font-semibold'>Дата: {moment(article.dateTime).format('lll')}</p>
					:
					undefined
			}

			<Form.Item
				label="Изменить дату"
				name="dateTime"
			>
				<DatePicker
					showTime={{
						format: 'HH:mm',
					}}
					format="YYYY-MM-DD HH:mm"
				/>
			</Form.Item>


			<Form.Item
				label="Изменить контент страницы"
				name="article"
				rules={[
					{
						required: true,
						message: 'Введите контент страницы!',
					},
				]}
			>
				<ReactEditor value={value} setValue={setValue} />
			</Form.Item>


			<Form.Item
				label=""
				name="publication"
			>
				<Radio.Group defaultValue={true}>
					<Radio.Button value={true}>опубликовать</Radio.Button>
					<Radio.Button value={false}>не опубликовывать</Radio.Button>

				</Radio.Group>
			</Form.Item>


			<Form.Item
				wrapperCol={{
					offset: 14,
				}}
			>
				<Button type="primary" htmlType="submit">
					Изменить страницу
				</Button>
			</Form.Item>

			<Popconfirm
				title="Вы точно хотите удалить статью?"
				onConfirm={deletePage}
				okText="Да"
				cancelText="Нет"
			>
				<Button type="primary" ghost danger>
					Удалить статью
				</Button>
			</Popconfirm>
		</Form>
	)
}
export default FormChangeArticlesPage
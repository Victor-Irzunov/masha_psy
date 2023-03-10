import { Modal, Result } from 'antd'
import FormResetPassword from '../form/formPassword/FormResetPassword'
import moment from 'moment'
// import { useNavigate } from 'react-router-dom'

const ModalComp = (
	{ isModalOpen, setIsModalOpen, title, formReset, data, setOpen, setValue }) => {
	// const navigate = useNavigate()
	
	const handleCancel = () => {
		setIsModalOpen(false)
		if (!formReset) {
			setOpen(false)
			setValue('')
			// navigate('/blog')
		}
	}
	return (
		<Modal
			title={title}
			open={isModalOpen}
			onCancel={handleCancel}
			footer={null}
		>
			{
				formReset ?
					<FormResetPassword handleCancel={handleCancel} />
					:
					<div className=''>
						<Result
							status="success"
							title={`${data.name} Вы записаны`}
							subTitle={
								<div className='text-sm font-light'>
									<p>
										Дата консультации: {moment(data.start).format("DD-MM-YYYY HH:mm")}
									</p>
									<p>
										Будет проходить {data.type}
									</p>
									<p className='text-xs text-gray-400 mt-5'>
										Если у Вас не получится присутствовать на консультации, пожалуйста сообщите заранее сообщением в WhatsApp, Telegram или по телефону. Спасибо.
									</p>
								</div>
							}
						// extra={[
						// 	<Button type="primary" key="console">
						// 		Go Console
						// 	</Button>,
						// 	<Button key="buy">Buy Again</Button>,
						// ]}
						/>
					</div>
			}

		</Modal>
	)
}
export default ModalComp
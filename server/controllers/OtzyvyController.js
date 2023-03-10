import { ApiError } from "../error/ApiError.js"
import { models } from "../models/models.js"
import { Op } from "sequelize"

class OtzyvyController {

	async create(req, res, next) {
		try {
			const { name, vozvrast, city, tel, otzyv, rate } = req.body
			const data = await models.Otzyvy.create({ name, vozvrast, city, tel, otzyv, rate })
			// console.log('req.body:', req.body)
			if (data) {
				return res.json({ message: 'Ваш отзыв принят. Спасибо' })
			}
			return res.json({ message: 'Ошибка' })
		} catch (err) {
			console.log('🚀-error: ', err)
			next(ApiError.badRequest(e.message))
		}
	}
	async getAll(req, res, next) {
		try {
			const data = await models.Otzyvy.findAll()
			return res.json(data)
		} catch (err) {
			console.log('🚀-error: ', err)
			next(ApiError.badRequest(e.message))
		}
	}

	async getNew(req, res, next) {
		try {
			const data = await models.Otzyvy.findAll({
				where: {
					isNew: {
						[Op.is]: true
					}
				}
			})
			return res.json(data)
		} catch (err) {
			console.log('🚀-error: ', err)
			next(ApiError.badRequest(err.message))
		}
	}

	async change(req, res, next) {
		try {
			const { id, response, isPublication } = req.body
			const data = await models.Otzyvy.update(
				{
					response,
					isPublication,
					isNew: false
				},
				{
					where: {
						id
					}
				}
			)

			if (data) {
				return res.json({ message: 'Ваш ответ принят. Спасибо' })
			}
			return res.json({ message: 'Ошибка' })
		} catch (err) {
			console.log('🚀-error: ', err)
			next(ApiError.badRequest(err.message))
		}
	}


}

export const otzyvyController = new OtzyvyController()
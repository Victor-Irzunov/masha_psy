import { ApiError } from "../error/ApiError.js"
import path from 'path'
import { URL } from 'url'
import { models } from "../models/models.js"
import { v4 as uuidv4 } from 'uuid'



class ArticlesController {
	async create(req, res, next) {
		try {
			let { view, link, article, publication, dateTime, group, like, description } = req.body
			const { img } = req.files
			// console.log('🚀🚀🚀- dateTime:::', dateTime)
			const fileName = []
			if (img) {
				const __dirname = decodeURI(new URL('.', import.meta.url).pathname)
				let name = uuidv4() + ".webp"
				fileName.push({ img: name })
				img.mv(path.resolve(__dirname, '..', 'static', name))
			}

			const data = await models.Articles.create({ view, link, article, like, group, description, publication, dateTime, img: JSON.stringify(fileName) })
			if (data) {
				return res.json({ message: `Статья добавлена` })
			}
		} catch (err) {
			console.log('🚀-error: ', err)
			next(ApiError.badRequest(e.message))
		}
	}

	async getAll(req, res, next) {
		try {
			const data = await models.Articles.findAll()
			// console.log('🚀data:', data)
			if (data) {
				return res.json(data)
			}
		} catch (err) {
			console.log('🚀-error: ', err)
			next(ApiError.badRequest(e.message))
		}
	}
	async getOne(req, res, next) {
		try {
			const { id } = req.params
			const data = await models.Articles.findOne({ where: { id } })
			// console.log('🚀data:', data)
			if (data) {
				return res.json(data)
			}
			return res.json({ message: 'Нет такой статьи' })
		} catch (err) {
			console.log('🚀-error: ', err)
			next(ApiError.badRequest(e.message))
		}
	}
	async changeOne(req, res, next) {
		try {
			let { view, link, article, publication, dateTime, group, like, description, id } = req.body
			let img = []
			if (req.files) {
				img = [...req.files.img]
			}
			// console.log('🚀id:', id)
			const fileName = []
			if (img.length) {
				const __dirname = decodeURI(new URL('.', import.meta.url).pathname)
				let name = uuidv4() + ".webp"
				fileName.push({ img: name })
				img.mv(path.resolve(__dirname, '..', 'static', name))
			}
			let data
			if (fileName.length) {
				data = await models.Articles.update(
					{ view, link, article, like, group, description, publication, dateTime, img: JSON.stringify(fileName) },
					{ where: { id } }
				)
			} else {
				data = await models.Articles.update(
					{ view, link, article, like, group, description, publication, dateTime },
					{ where: { id } }
				)
			}
			// console.log('🚀data:', data)
			if (data) {
				return res.json({ message: 'Статья изменена' })
			}
			return res.json({ message: 'Ошибка' })
		} catch (err) {
			console.log('🚀-error: ', err)
			next(ApiError.badRequest(e.message))
		}
	}

	
	async deleteOne(req, res, next) {
		try {
			let { id } = req.params
			console.log('🚀id:', id)
			const data = await models.Articles.destroy(
				{ where: { id } }
			)
			console.log('🚀data:', data)
			if (data) {
				return res.json(data)
			}
			return res.json({ message: 'dddd' })

		} catch (err) {
			console.log('🚀-error: ', err)
			next(ApiError.badRequest(e.message))
		}
	}

	async userView(req, res, next) {
		try {
			let { id } = req.params
			console.log('🚀id:', id)
			const data = await models.Articles.findOne(
				{ where: { id } }
			)
			data.view = data.view + 1
			data.count = data.count + 1
			await data.save()
			// console.log('🚀data:', data)
			return res.json({ message: 'увеличение на 1' })
		} catch (err) {
			console.log('🚀-error: ', err)
			next(ApiError.badRequest(e.message))
		}
	}

	async userLike(req, res, next) {
		try {
			let { id } = req.params
			console.log('🚀id:', id)

			const data = await models.Articles.findOne(
				{ where: { id } }
			)
			data.like = data.like + 1
			await data.save()
			return res.json({ message: 'Ваша оценка принята, спасибо)' })
		} catch (err) {
			console.log('🚀-error: ', err)
			next(ApiError.badRequest(e.message))
		}
	}
}

export const articlesController = new ArticlesController()

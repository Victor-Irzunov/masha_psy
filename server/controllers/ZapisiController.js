import { models } from "../models/models.js"
import { ApiError } from '../error/ApiError.js'
import { Op } from "sequelize"


class ZapisiController {

    async create(req, res, next) {
        try {
            const { start, end, title, allDay, tel, type, zapros } = req.body
            console.log('💊req.body: ', req.body)
            const [row, created] = await models.Zapisi.findOrCreate({ where: { start }, defaults: { start, end, title, allDay, tel, type, zapros } })
            if (created) {
                return res.status(201).json(row)
            }

            return res.status(201).json({message:'На это время запись есть!!'})
        }
        catch (e) {
            console.log('🦺--ошибка : ', e)
            next(ApiError.badRequest(e.message))
        }
    }

    async editOne(req, res, next) {
        try {
            const { start, end, title, allDay, tel, type, zapros, id } = req.body
            // console.log('💊req.body: ', req.body)
            const data = await models.Zapisi.update(
                { start, end, title, allDay, tel, type, zapros },
                { where: { id } }
            )
            return res.status(201).json(data)
        }
        catch (e) {
            console.log('🦺--ошибка : ', e)
            next(ApiError.badRequest(e.message))
        }
    }


    async getAll(req, res, next) {
        try {
            const data = await models.Zapisi.findAll()
            return res.json(data)
        } catch (e) {
            next(ApiError.badRequest(e.message))
            console.log('🦺--ошибка : ', e)
        }
    }


    async getAllByDate(req, res, next) {
        try {
            const { start } = req.query
            let date = start.slice(0, 10)
            const data = await models.Zapisi.findAll({
                where: {
                    start: { [Op.substring]: date }
                }
            })
            // console.log('🦺data:', data)
            return res.json(data)
        } catch (e) {
            next(ApiError.badRequest(e.message))
            console.log('🦺--ошибка : ', e)
        }
    }

    async deleteOne(req, res, next) {
        try {
            const { id } = req.params
            await models.Zapisi.destroy({ where: { id } })
            return res.json({ message: `Запись удалена` })
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
            console.log('🦺--ошибка : ', e)
        }
    }

}

export const zapisiController = new ZapisiController()

import { Router } from "express"
import { articlesController } from '../controllers/ArticlesController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'
const router = new Router()

router.post('/', checkRole('ADMIN'), articlesController.create)
router.get('/all', articlesController.getAll)
router.get('/:id', articlesController.getOne)
router.put('/:id', articlesController.userView)
router.put('/like/:id', articlesController.userLike)
router.put('/', checkRole('ADMIN'), articlesController.changeOne)
router.delete('/:id', checkRole('ADMIN'), articlesController.deleteOne)

export default router
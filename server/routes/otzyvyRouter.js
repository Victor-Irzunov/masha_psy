import { Router } from "express"
import { otzyvyController } from '../controllers/OtzyvyController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'
const router = new Router()

router.post('/', otzyvyController.create)
router.get('/', otzyvyController.getAll)
router.get('/new', checkRole('ADMIN'), otzyvyController.getNew)
router.put('/', checkRole('ADMIN'), otzyvyController.change)


export default router
import { Router } from "express"
const router = new Router()
import { zapisiController } from '../controllers/ZapisiController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'


router.post('/', checkRole('ADMIN'), zapisiController.create)
router.get('/', checkRole('ADMIN'), zapisiController.getAllByDate)
router.get('/all', zapisiController.getAll)
router.delete('/:id', checkRole('ADMIN'), zapisiController.deleteOne)
router.put('/', checkRole('ADMIN'), zapisiController.editOne)



export default router
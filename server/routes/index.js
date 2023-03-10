import { Router } from "express"
const router = new Router()
import articleRouter from "./articleRouter.js"
import userRouter from "./userRouter.js"
import zapisiRouter from "./zapisiRouter.js"
import otzyvyRouter from "./otzyvyRouter.js"

router.use('/user', userRouter)
router.use('/zapisi', zapisiRouter)
router.use('/article', articleRouter)
router.use('/otzyvy', otzyvyRouter)



export default router
// routes/auth.js

import userRouter from './user'
import Router from 'koa-router'

const router = new Router()

router.use('/auth', userRouter.routes(), userRouter.allowedMethods())

export default router
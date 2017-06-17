// routes/api.js

import todolistRouter from './todolist'
import Router from 'koa-router'
import kjwt from 'koa-jwt'
import config from '../config'

const router = new Router()

router.use('/api', kjwt({secret: config.hash}), todolistRouter.routes(), todolistRouter.allowedMethods())

export default router

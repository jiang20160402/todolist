import Router from 'koa-router'
import auth from './auth'
import api from './api'

const router = new Router()

router.use(auth.routes(), auth.allowedMethods())
router.use(api.routes(), api.allowedMethods())

export default router
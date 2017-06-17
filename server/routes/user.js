// routes/user.js

import userController from '../controllers/user'
import Router from 'koa-router'

const router = new Router()

router.get('/user/:id', userController.getUserInfo)
router.post('/user', userController.postUserAuth)
router.post('/checkusername', userController.checkUsername)
router.post('/register', userController.addUser)

export default router
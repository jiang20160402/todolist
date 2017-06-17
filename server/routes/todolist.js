import todolistController from '../controllers/todolist'
import Router from 'koa-router'

const router = new Router()

router.get('/todolist/:id', todolistController.getTodolist)
router.post('/todolist', todolistController.createTodolist)
router.put('/todolist/:userId/:id/:status', todolistController.updateTodolist)
router.del('/todolist/:userId/:id', todolistController.removeTodolist)

export default router
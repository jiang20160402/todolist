// server/controllers/todolist

import todolist from '../models/todolist'

exports.getTodolist = async (ctx) => {
    const id = ctx.params.id
    const result = await todolist.getTodolistById(id)
    ctx.body = result
}

exports.createTodolist = async (ctx) => {
    const data = ctx.request.body
    const result = await todolist.createTodolist(data)

    ctx.body = {
        success: result
    }
}

exports.removeTodolist = async (ctx) => {
    const id = ctx.params.id
    const user_id = ctx.params.userId
    const result = await todolist.removeTodolist(id, user_id)

    ctx.body = {
        success: result
    }
}

exports.updateTodolist = async (ctx) => {
    const id = ctx.params.id
    const user_id = ctx.params.userId
    let status = ctx.params.status
    status === '0' ? status = true : status = false

    const result = await todolist.updateTodolist(id, user_id, status)

    ctx.body = {
        success: result
    }
}
// server/models/todolist.js

import db from '../config/db'

const todoModel = '../schema/store_list'
const TodolistDb = db.Todolist

const Todolist = TodolistDb.import(todoModel)

exports.getTodolistById = async (id) => {
    const todolist = await Todolist.findAll({
        where: {
            user_id: id
        },
        attributes: ['id', 'content', 'status']
    })

    return todolist
}

exports.createTodolist = async (data) => {
    await Todolist.create({
        user_id: data.id,
        content: data.content,
        status: data.status
    })

    return true
}

exports.removeTodolist = async (id, user_id) => {
    await Todolist.destroy({
        where: {
            id,
            user_id
        }
    })

    return true
}

exports.updateTodolist = async (id, user_id, status) => {
    await Todolist.update(
        {
            status
        },
        {
            where: {
                id,
                user_id
            }
        }
    )

    return true
}
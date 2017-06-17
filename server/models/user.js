// models/user.js
const db = require('../config/db.js')
const userModel = '../schema/store_user.js'
const TodolistDb = db.Todolist

const User = TodolistDb.import(userModel)

exports.getUserById = async function (id) {
    const userInfo = await User.findOne({
        where: {
            id: id
        }
    })

    return userInfo
}

exports.getUserByName = async (name) => {
    const userInfo = await User.findOne({
        where: {
            username: name
        }
    })

    return userInfo
}

exports.addUser = async (data) => {
    await User.create({
        username: data.name,
        password: data.password
    })

    return true
}
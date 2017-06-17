// db.js

import Sequelize from 'sequelize'

exports.Todolist = new Sequelize('mysql://root:password@localhost/vuetest', {
    define: {
        timestamps: false
    }
})

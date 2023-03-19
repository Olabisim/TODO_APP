const Sequelize = require('sequelize')
const sequelize = require('../utils/db')

const Todo = sequelize.define('todo', {
        id: {
                type : Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
        },
        title: {
                type: Sequelize.STRING,
                allowNull: false
        },
        completed: {
                type: Sequelize.STRING,
                defaultValue: false
        }
})

module.exports = { Todo }


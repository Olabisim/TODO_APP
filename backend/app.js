const sequelizeImport = require('./utils/db')
const express = require('express')
const authRoutes = require('./routes/authRoutes')
const todoRoutes = require('./routes/todoRoutes')
const app = express()
const cors = require('cors')


app.use(cors())
app.options("*", cors())

app.use(express.json())

app.use('/', authRoutes)
app.use('/', todoRoutes)


async function checkseq() {
        try {
                await sequelizeImport.authenticate()
                console.log('connection established')
        }
        catch(err) {
                console.log('Unable to connect to the database', err)
        }
}

checkseq()

app.listen(8080, () => {
        console.log("server has started")
})

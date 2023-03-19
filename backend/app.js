const sequelizeImport = require('./utils/db')
const express = require('express')
const authRoutes = require('./routes/authRoutes')
const app = express()


app.use(express.json())

app.use( '/', authRoutes)


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

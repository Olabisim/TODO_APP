const sequelizeImport = require('./utils/db')
const express = require('express')
const app = express()


app.use(express.json())


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

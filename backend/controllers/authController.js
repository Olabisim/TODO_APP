const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {User} = require('../models/user')
const {SECRET_KEY} = process.env


async function register(req, res ) {
        
        try {
                const {name, email, password} = req.body;

                const hash = await bcrypt.hash(password, 10);

                console.log(hash)

                const user = await User.create({name, email, password: hash})

                const token = jwt.sign({userId: user.id}, SECRET_KEY)

                res.status(201).json({status: true, message: "User resgistered succesfully", data: {token}})
        }
        catch(err) {
                res.status(500).json({status: false, message: "error while registering a user", data: {err}})
        }
}

module.exports = {register}
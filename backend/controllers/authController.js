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


async function login(req, res) {
        try {
                const {email, password} = req.body

                const user = await User.findOne({ where: { email }});
                console.log(user)

                if(!user) res.status(404).json({status: false, data:{message: "user not found"}})

                const match = await bcrypt.compare(password, user.password);

                if(!match) res.status(401).json({ status: false, data: {message: 'Invalid Credentials '}})

                const token = jwt.sign({ userId: user.id}, SECRET_KEY)

                res.status(200).json({status: true, message: "User logged in successfully", data: {token}})
        }

        catch(err) {
                res.status(500).json({status: false, message: "an error occured", data: {err}})
        }
}


module.exports = {register, login}
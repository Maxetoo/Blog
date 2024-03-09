const express = require('express')
const AuthRoute = express.Router()

const {
    signup,
    login,
    forgotPassword,
    logout
} = require('../controllers/authController')

AuthRoute.route('/signup').post(signup);
AuthRoute.route('/login').post(login)
AuthRoute.route('/forgotPassword').post(forgotPassword)
AuthRoute.route('/logout').post(logout)

module.exports = AuthRoute

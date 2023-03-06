const express = require('express')
const router = express.Router()
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})
const {controllers} = require('../controllers/auth/authControllers')

const registerSchema = Joi.object({
    username: Joi.string().min(2).max(20).required(),
    password: Joi.string().min(6).max(20).required(),
    mail: Joi.string().email().required()
})

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(20).required(),
    mail: Joi.string().email().required()
}) 



router.post('/register', validator.body(registerSchema), controllers.postRegister)
router.post('/login', validator.body(loginSchema), controllers.postLogin)

module.exports = router
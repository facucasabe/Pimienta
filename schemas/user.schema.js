const Joi = require('joi');

const id = Joi.number();
const nombre = Joi.string()
const email = Joi.string()
const password = Joi.string()


const createUserSchema = Joi.object({
  nombre: nombre.required(),
  email: email.required(),
  password: password.required()
})

const updateUserSchema = Joi.object({
  id: id.required()
})

const getUserSchema = Joi.object({
  id: id.required()
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema }

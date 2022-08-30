const Joi = require('joi');

const id = Joi.number();
const nombre = Joi.string()
const email = Joi.string()
const password = Joi.string()
const testResults = Joi.array().items(Joi.object())


const createUserSchema = Joi.object({
  nombre: nombre.required(),
  email: email.required(),
  password: password.required()
})

const updateUserSchema = Joi.object({
  id: id.required(),
  email,
  password,
  testResults
})

const getUserSchema = Joi.object({
  id: id.required()
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema }

const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema')


const UsersService = require('../services/users.service')

const service = new UsersService();

const router = express.Router()

router.get('/', (req, res) => {
  try {
    const users = service.find()
    res.json(users)
  }
  catch (error) { return error }
})

router.get('/:id', validatorHandler(getUserSchema, 'params'),
  async (req, res) => {
    try {
      const { id } = req.params
      const user = await service.findOne(id)
      res.json(user)
    } catch (error) { return error }
  })

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res) => {
    try {


      const body = req.body;
      const newUser = await service.create(body)
      res.status(201).json({
        message: 'created',
        data: newUser
      })
    } catch (error) { return error }
  })

router.patch('/:id', (req, res, next) => {
  validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body')
  try {
    const changes = req.body
    const { id } = req.params
    const user = service.update(id, changes)
    res.json(user)
  }
  catch (error) {
    next(error)
  }
})


module.exports = router


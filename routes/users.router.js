const express = require('express');
const boom = require('@hapi/boom')
const validatorHandler = require('../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema')


const UsersService = require('../services/users.service')

const service = new UsersService();

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find()
    res.json(users)
  }
  catch (error) { next(error) }
})

router.get('/:id', validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const user = await service.findOne(id)
      if (!user) {
        boom.notFound('Usuario no encontrado')
      }
      res.json(user)
    } catch (error) { next(error) }
  })

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res) => {
    try {
      const body = req.body;
      const newUser = await service.create(body)
      console.log('newUser', newUser)
      res.json({
        message: 'created',
        data: newUser
      })
    } catch (error) { return error }
  })

router.patch('/:id', async (req, res, next) => {
  validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body')
  try {
    const changes = req.body
    const { id } = req.params
    const user = await service.update(id, changes)
    res.json(user)
  }
  catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  validatorHandler(getUserSchema, 'params')
  try {
    const { id } = req.params
    const user = await service.delete(id)
    res.send('User Deleted')
  } catch (error) { next(error) }
})


module.exports = router


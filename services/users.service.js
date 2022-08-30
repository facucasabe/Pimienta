const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const { User } = require('../database/models/user.model');
const getConnection = require('../libraries/postgres')
const pool = require('../libraries/postgres.pool')
const { models } = require('../libraries/sequelize')

class UsersService {
  constructor() { }

  generate() {
    const limit = 15;
    for (let i = 0; i < limit; i++) {
      models.User.create({
        name: faker.name.fullName(),
        email: faker.email(),
        password: faker.password()
      })
    }
  }

  create(body) {
    const newUser = models.User.create(body)
    return newUser
  }

  async find() {
    const response = await models.User.findAll()
    return response
  }

  async findOne(id) {
    const user = await models.User.findByPk(id)
    if (!user) {
      throw boom.notFound('User not found')
    } else { return user }
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const updatedUser = await user.update(changes)
    return updatedUser
  }

  async delete(id) {
    const user = await this.findOne(id)
    user.destroy()
  }

}

module.exports = UsersService

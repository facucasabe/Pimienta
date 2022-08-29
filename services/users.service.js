const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom')

class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 15;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.fullName()
      })
    }
  }

  create(data) {
    const newUser = {
      id: faker.datatype.number(),
      ...data
    }
    this.users.push(newUser)
    return newUser
  }

  find() {
    return this.users
  }

  findOne(id) {

    const user = this.users.find(e => e.id === id)
    if (!user) {
      throw boom.notFound('User not found')
    } else { return user }
  }

  update(id, changes) {
    const index = this.users.findIndex(e => e.id === id)
    if (index === -1) {
      throw boom.notFound('User not found')
    }
    const user = this.users[index]
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];
  }

  delete() { }

}

module.exports = UsersService

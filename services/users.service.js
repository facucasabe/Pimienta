const { faker } = require('@faker-js/faker');

class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 15;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.number(),
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
    return this.users.find(e => e.id === parseInt(id))
  }

  update(id, changes) {
    const index = this.users.findIndex(e => e.id === parseInt(id))
    if (index === -1) {
      throw new Error('User not found')
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

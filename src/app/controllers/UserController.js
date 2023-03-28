import User from '../models/User';

class UserController {
  async index(req, res) {
    return {
      hello: 'world',
    };
  }

  async store(req, res) {
    return User.create({
      id: 1,
      name: 'Walter',
    });
  }
}

export default new UserController();

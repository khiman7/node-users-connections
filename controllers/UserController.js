const UserService = require('../utils/UserService');

class UserController {
  async getAll(req, res) {
    try {
      const users = await UserService.getAll();

      return res.json(users);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getOne(id);

      return res.json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async getFriendsCount(req, res) {
    try {
      const { id } = req.params;
      const friendsCount = await UserService.getFriendsCount(id);
     
      return res.json(friendsCount);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async getPopular(req, res) {
    try {
      const popularUsers = await UserService.getPopular();

      return res.json(popularUsers)
    } catch (err) {
      res.status(500).json(err);
    }
  }
}


module.exports = new UserController();
const User = require('../models/user.model');

class UserService {
  async getAll() {
    const users = await User.find();

    return users
  }

  async getOne(id) {
    if (!id) {
      throw new Error('User ID is not specified')
    }

    const user = await User.findOne({ userId: id }).lean();

    return user;
  }

  async getFriendsCount(id) {
    if (!id) {
      throw new Error('User ID is not specified')
    }

    const user = await User.findOne({ userId: id }).lean();
    console.log(user);
    const { userId, followed, followers } = user;

    const friendsCount = followed.filter((followedId) =>
      followers.includes(followedId)
    ).length;

    return {
      userId, friendsCount
    };
  }

  async getPopular() {
    const users = await User.find();
    const popularUsers = users
      .sort(
        (firstUser, secondUser) =>
          secondUser.followers.length - firstUser.followers.length
      )
      .slice(0, 3);

    return popularUsers;
  }
}

module.exports = new UserService();
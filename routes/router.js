const Router = require('express');
const UserController = require('../controllers/UserController');

const router = new Router();

router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getOne);
router.get('/friendscount/:id', UserController.getFriendsCount);
router.get('/popular', UserController.getPopular);

module.exports = router;
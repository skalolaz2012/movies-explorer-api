const usersRouter = require('express').Router();
const { celebrate } = require('celebrate');

const {
  validateUserId,
  validateEditUser,
} = require('../utils/validators');
const {
  getYourself,
  editUser,
} = require('../controllers/users');

usersRouter.get('/me', celebrate(validateUserId), getYourself);
usersRouter.patch('/me', celebrate(validateEditUser), editUser);

module.exports = usersRouter;

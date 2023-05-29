/* экспортируем модель со схемой в контроллер */
const User = require('../models/user');
const myError = require('../errors');

const checkUser = (user, res) => {
  if (!user) {
    throw new myError.NotFoundError(myError.NotFoundMsg);
  }
  return res.send(user);
};

const getYourself = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => {
      throw new myError.NotFoundError(myError.NotFoundMsg);
    })
    .then((user) => res.send(user))
    .catch(next);
};

const editUser = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    { new: true, runValidators: true }
  )
    .then((user) => checkUser(user, res))
    .catch((err) => {
      if (err.code === 11000) {
        next(new myError.AlreadyExistError(myError.AlreadyExistMsg));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getYourself,
  editUser,
};

const router = require('express').Router();
const { celebrate } = require('celebrate');

const {
  validateLogin,
  validateCreateUser,
} = require('../utils/validators');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/auth');
const myError = require('../errors/errors');

router.post('/signin', celebrate(validateLogin), login);
router.post('/signup', celebrate(validateCreateUser), createUser);

router.use('/users', auth, require('./users'));
router.use('/movies', auth, require('./movies'));

router.use('*', auth, (req, res, next) => {
  next(new myError.NotFoundError(myError.NotFoundMsg));
}); // несуществующий роут всегда должен быть после остальных роутов в конце

module.exports = router;

/* экспортируем модель со схемой в контроллер */
const Movie = require('../models/movie');
const myError = require('../errors');
const { SuccessDel } = require('../utils/constants');

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  const owner = req.user._id;

  Movie.create({ owner, ...req.body })
    .then((movie) => {
      res.status(201).send(movie);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new myError.BadRequestError(myError.BadRequestMsg));
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => {
  const owner = req.user._id;

  Movie.findById({ _id: req.params._id })
    .orFail(() => new myError.NotFoundError(myError.NotFoundMsg))
    .then((movie) => {
      if (!movie) {
        return next(new myError.NotFoundError(myError.NotFoundMsg));
      }
      if (movie.owner.toHexString() !== owner) {
        return next(new myError.ForbiddenError(myError.ForbiddenMsg));
      }
      return movie.deleteOne()
      .then(() => res.send({ message: SuccessDel }))
      .catch(next);
    })
    .catch(next);
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};

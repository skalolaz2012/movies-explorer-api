const moviesRouter = require('express').Router();
const { celebrate } = require('celebrate');

const {
  validateDataOfMovies,
  validateMovieId,
} = require('../utils/validators');
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.get('/', getMovies);
moviesRouter.post('/', celebrate(validateDataOfMovies), createMovie);
moviesRouter.delete('/:movieId', celebrate(validateMovieId), deleteMovie);

module.exports = moviesRouter;

const moviesRouter = require('express').Router();
const { celebrate } = require('celebrate');

const {
  validateUserId,
  validateDataOfMovies,
  validateMovieId,
} = require('../utils/validators');
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.get('/', celebrate(validateUserId), getMovies);
moviesRouter.post('/', celebrate(validateDataOfMovies), createMovie);
moviesRouter.delete('/movies/:_id', celebrate(validateMovieId), deleteMovie);

module.exports = moviesRouter;

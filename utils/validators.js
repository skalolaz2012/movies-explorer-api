const { Joi } = require('celebrate');
const { urlLinkPattern } = require('./constants');

const validateCreateUser = {
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).messages({
      'string.min': 'Поле "Имя" не должно быть менее 2 символов',
      'string.max': 'Поле "Имя" не должно быть более 30 символов',
      'any.required': 'Поле "Имя" не должно быть пустым!',
    }),
    email: Joi.string().required().email().messages({
      'string.email': 'Введите корректный email',
      'any.required': 'Поле email не должно быть пустым!',
    }),
    password: Joi.string().required().min(6).messages({
      'string.min': 'Пароль должен быть не менее 6 символов',
      'any.required': 'Пароль не может быть пустым!',
    }),
  }),
};

const validateEditUser = {
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': 'Поле "Имя" не должно быть менее 2 символов',
        'string.max': 'Поле "Имя" не должно быть более 30 символов',
        'any.required': 'Поле "Имя" не должно быть пустым!',
      }),
    email: Joi.string().required().email().messages({
      'string.email': 'Введите корректный email',
      'any.required': 'Поле email не должно быть пустым!',
    }),
  }),
};

const validateUserId = {
  params: Joi.object({
    userId: Joi.string().hex().length(24)
      .messages({
        'any.length': 'Id указан неверно',
      }),
  }),
};

const validateDataOfMovies = {
  body: Joi.object({
    country: Joi.string().required()
      .messages({
        'any.required': 'Поле Страна обязательное!',
      }),
    director: Joi.string().required()
      .messages({
        'any.required': 'Поле "Режиссёр" обязательное!',
      }),
    duration: Joi.string().required()
      .messages({
        'any.required': 'Поле "Продолжительность" обязательное!',
      }),
    year: Joi.string().required()
      .messages({
        'any.required': 'Поле "Год выпуска" обязательное!',
      }),
    description: Joi.string().required()
      .messages({
        'any.required': 'Поле "Описание" обязательное!',
      }),
    image: Joi.string().required().regex(urlLinkPattern)
      .messages({
        'any.required': 'Должна быть ссылка!',
      }),
    trailerLink: Joi.string().required().regex(urlLinkPattern)
      .messages({
        'any.required': 'Должна быть ссылка!',
      }),
    thumbnail: Joi.string().required().regex(urlLinkPattern)
      .messages({
        'any.required': 'Должна быть ссылка!',
      }),
    movieId: Joi.string().required()
      .messages({
        'any.required': 'Поле "Id" обязательное!',
      }),
    nameRU: Joi.string().required()
      .messages({
        'any.required': 'Поле "Название на русском" обязательное!',
      }),
    nameEN: Joi.string().required()
      .messages({
        'any.required': 'Поле "Название на английском" обязательное!',
      }),
  }),
};

const validateMovieId = {
  params: Joi.object({
    cardId: Joi.string().required().hex().length(24)
      .messages({
        'any.required': 'Id указан неверно',
      }),
  }),
};

const validateLogin = {
  body: Joi.object({
    email: Joi.string().required().email().messages({
      'string.email': 'Введите корректный email',
      'any.required': 'Поле email не должно быть пустым!',
    }),
    password: Joi.string().required().min(6).messages({
      'string.min': 'Пароль должен быть не менее 6 символов',
      'any.required': 'Пароль не может быть пустым!',
    }),
  }),
};

module.exports = {
  validateCreateUser,
  validateEditUser,
  validateUserId,
  validateDataOfMovies,
  validateMovieId,
  validateLogin,
};

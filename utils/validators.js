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
    password: Joi.string().required().messages({
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
    _id: Joi.string().hex().length(24)
      .messages({
        'string.hex': 'Id пользователя указан неверно',
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
    duration: Joi.number().required()
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
    movieId: Joi.number().required()
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
    _id: Joi.string().hex().length(24)
      .messages({
        'string.hex': 'Id фильма указан неверно',
      }),
  }),
};

const validateLogin = {
  body: Joi.object({
    email: Joi.string().required().email().messages({
      'string.email': 'Введите корректный email',
      'any.required': 'Поле email не должно быть пустым!',
    }),
    password: Joi.string().required().messages({
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

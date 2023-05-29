const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, 'Поле "Страна" обязательное!'],
    },
    director: {
      type: String,
      required: [true, 'Поле "Режиссёр" обязательное!'],
    },
    duration: {
      type: Number,
      required: [true, 'Поле "Продолжительность" обязательное!'],
    },
    year: {
      type: String,
      required: [true, 'Поле "Год выпуска" обязательное!'],
    },
    description: {
      type: String,
      required: [true, 'Поле "Описание" обязательное!'],
    },
    image: {
      type: String,
      required: [true, 'Поле "Постер" обязательное!'],
      validate: {
        validator: (v) => validator.isURL(v),
      },
    },
    trailerLink: {
      type: String,
      required: [true, 'Поле "Трейлер" обязательное!'],
      validate: {
        validator: (v) => validator.isURL(v),
      },
    },
    thumbnail: {
      type: String,
      required: [true, 'Поле "Уменьшенная копия постера" обязательное!'],
      validate: {
        validator: (v) => validator.isURL(v),
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    movieId: {
      type: Number,
      required: [true, 'Поле "Id" обязательное!'],
    },
    nameRU: {
      type: String,
      required: [true, 'Поле "Название на русском" обязательное!'],
    },
    nameEN: {
      type: String,
      required: [true, 'Поле "Название на английском" обязательное!'],
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('movie', movieSchema);

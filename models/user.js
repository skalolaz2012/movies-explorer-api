const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const myError = require("../errors");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Поле "Email" должно быть заполнено'],
      unique: true,
      validate: {
        validator: (v) => validator.isEmail(v),
      },
    },
    password: {
      type: String,
      required: [true, 'Поле "Пароль" должно быть заполнено'],
      select: false,
    },
    name: {
      type: String,
      required: [true, 'Поле "Имя" должно быть заполнено'],
      minlength: [2, 'Минимальная длина поля "name" - 2'],
      maxlength: [30, 'Максимальная длина поля "name" - 30'],
    },
  },
  { versionKey: false }
);

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .select("+password")
    .then((user) => {
      if (!user) {
        return Promise.reject(new myError.AuthError(myError.NeedAuthMsg));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new myError.AuthError(myError.AuthMsg));
        }
        return user; // теперь user доступен
      });
    });
};

module.exports = mongoose.model("user", userSchema);

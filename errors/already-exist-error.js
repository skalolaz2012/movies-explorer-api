const AlreadyExistMsg = 'Пользователь с таким email уже существует.';

class AlreadyExistError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 409;
  }
}

module.exports = { AlreadyExistError, AlreadyExistMsg };

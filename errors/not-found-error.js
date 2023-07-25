const NotFoundMsg = '404 Страница по указанному маршруту не найдена.';

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

module.exports = { NotFoundError, NotFoundMsg };

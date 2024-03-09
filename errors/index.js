const NotFoundError = require('./NotFound')
const BadRequestError = require('./BadRequest')
const UnauthorizedError = require('./Unauthorised')

const CustomError = {
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
}

module.exports = CustomError
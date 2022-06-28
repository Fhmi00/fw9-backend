const response = require('../helpers/standardresponse')

exports.getAllUsers = (req, res) => {
    return response(res, 'message from standard response',404)
}
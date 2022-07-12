const {validationResult} = require('express-validator');
const response = require('../helpers/standardresponse');

const validation = (req, res, next) => {
  const eror = validationResult(req);
  if(!eror.isEmpty()) {
    return response(res, 'validation error', eror.array(), null, 400);
  }
  next();
};

module.exports = validation;
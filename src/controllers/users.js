const response = require('../helpers/standardresponse');

const userModel = require('../models/users');

exports.getAllUsers = (req, res) => {
  userModel.getAllUsers((results) => {
    return response(res, 'message from standard response', results);
  });    
};
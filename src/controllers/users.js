const response = require('../helpers/standardresponse');

const userModel = require('../models/users');

exports.getAllUsers = (req, res) => {
  userModel.getAllUsers((results) => {
    return response(res, 'message from standard response', results);
  });    
};

exports.createUser = (req, res) => {
  userModel.createUser(req.body, (results) => {
    return response(res, 'create user succesfully', results[0]);
  });
};
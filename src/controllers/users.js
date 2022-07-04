const response = require('../helpers/standardresponse');
const userModel = require('../models/users');
const {validationResult} = require('express-validator');
const errResponse = require('../helpers/errorResponse');

exports.getAllUsers = (req, res) => {
  userModel.getAllUsers((results) => {
    return response(res, 'message from standard response', results);
  });    
};


exports.createUser = (req, res) => {
  const validaton = validationResult(req);
  if(!validaton.isEmpty()){
    return response(res, 'error occured', validaton.array(), 400);
  }
  userModel.createUser(req.body, (err, results) => {
    if(err) {
      if(err.code === '23505' && err.detail.includes('email')) {
        const eres = errResponse('Email already exist', 'email');
        return response(res, 'error', eres, 400);
      } else if(err.code === '23505' && err.detail.includes('username')){
        const eres = errResponse('username already exist', 'username');
        return response(res, 'error', eres, 400);
      }
      return response(res, 'error', null, 400);
    } else{
      return response(res, 'create user succesfully', results[0]);
    }
  });
};

exports.editUser = (req, res) => {
  const {id} = req.params;
  userModel.updateUser(id, req.body, (results) => {
    return response(res, 'Update data success!', results[0]);
  });
};

exports.deleteUser = (req, res) => {
  const {id} = req.params;
  userModel.deleteUser(id, (results) => {
    return response(res, 'user deleted!', results[0]);
  });
};
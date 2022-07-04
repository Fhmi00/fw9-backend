const response = require('../helpers/standardresponse');
const userModel = require('../models/users');
const {validationResult} = require('express-validator');
const errResponse = require('../helpers/errorResponse');

exports.getAllUsers = (req, res) => {
  userModel.getAllUsers((results) => {
    return response(res, 'message from standard response', results);
  });    
};

exports.getUserById = (req, res) => {
  const {id} = req.params;
  userModel.getUserById(id, (err, results) => {
    if(results.rows.length > 0) {
      return response(res, 'user detail', results.rows[0]);
    } else {
      return res.redirect('/404');
    }
  });
};

exports.createUser = (req, res) => {
  const validation = validationResult(req);
  if(!validation.isEmpty()){
    return response(res, 'error occured', validation.array(), 400);
  }
  userModel.createUser(req.body, (err, results) => {
    if(err) {
      return errResponse(err, res);
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
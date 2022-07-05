/* eslint-disable no-unused-vars */
const response = require('../helpers/standardresponse');
const userModel = require('../models/users');
const {validationResult, body } = require('express-validator');
const errResponse = require('../helpers/errorResponse');
// eslint-disable-next-line no-undef
const {LIMIT_DATA} = process.env;

exports.getAllUsers = (req, res) => {
  const {search = '', limit=parseInt(LIMIT_DATA), page=1} = req.query;

  const offset = (page-1) * limit;

  userModel.getAllUsers(search, limit, offset, (results) => {
    if(results.length < 1) {
      return res.redirect('/404');
    }
    const pageInfo = {};

    userModel.countAllUsers(search, (err, totalData) => {
      pageInfo.totalData = totalData;
      pageInfo.totalPage = Math.ceil(totalData/limit);
      pageInfo.currentPage = parseInt(page);
      pageInfo.nextPage = pageInfo.currentPage < pageInfo.totalPage ? pageInfo.currentPage + 1 : null;
      pageInfo.prevPage = pageInfo.currentPage > 1 ? pageInfo.currentPage - 1 : null;
      return response(res, 'list all users', results, pageInfo);
    });
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
    return response(res, 'error occured', validation.array(), null, 400);
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
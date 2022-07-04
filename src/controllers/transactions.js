const response = require('../helpers/standardresponse');

const transactionsModel = require('../models/transactions');

const {body, validationResult} = require('express-validator');

const errResponse = require('../helpers/errorResponse');

exports.getAllTransactions = (req, res) => {
  transactionsModel.getAllTransactions((results) => {
    return response(res, 'message from standard response', results);
  });    
};

exports.createTransactions = [
  body('time').isDate({format: 'YYYY-MM-DD'}).withMessage('invalid format date (YYYY-MM-DD)'), (req, res) => {
    const validation = validationResult(req);
    if(!validation.isEmpty()){
      return response(res, 'error occured', validation.array(), 400);
    }
    transactionsModel.createTransactions(req.body, (err, results) => {
      if(err) {
        return errResponse(err, res);
      }
      return response(res, 'transaction created', results);
    });
  }
];

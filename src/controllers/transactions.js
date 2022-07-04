const response = require('../helpers/standardresponse');

const transactionsModel = require('../models/transactions');

exports.getAllTransactions = (req, res) => {
  transactionsModel.getAllTransactions((results) => {
    return response(res, 'message from standard response', results);
  });    
};

exports.createTransactions = (req, res) => {
  transactionsModel.createTransactions(req.body, (results) => {
    return response(res, 'create user succesfully', results[0]);
  });
};


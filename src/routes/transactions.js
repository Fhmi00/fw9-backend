const transactions = require('express').Router();

transactionController = require('../controllers/transactions');

transactions.get('/', transactionController.getAllTransactions);

module.exports = transactions;
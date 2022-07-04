const transactions = require('express').Router();

const transactionsController = require('../controllers/transactions');

transactions.get('/', transactionsController.getAllTransactions);
transactions.post('/', ...transactionsController.createTransactions);


module.exports = transactions;
exports.getAllTransactions = ((req, res) => {
    return res.json({
        succes: true,
        message: 'list all transactions'
    });
});
const db = require('../helpers/db');

exports.getAllTransactions = (cb)=>{
  db.query('SELECT * FROM transactions ORDER BY id ASC', (err, res) => {
    // console.log(err);
    cb(res.rows);
  });
};

exports.createTransactions = (data, cb) => {
  const q = 'INSERT INTO transactions(amount, recipient_id, sender_id, notes, time, type_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const val = [data.amount, data.recipient_id, data.sender_id, data.notes, data.time, data.type_id];
  db.query(q, val, (err, res) => {
    if(err) {
      cb(err);
    } else{
      cb(err, res.rows);
    }
  });
};
 


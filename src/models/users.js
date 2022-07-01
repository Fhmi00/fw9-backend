const db = require('../helpers/db');

exports.getAllUsers = (cb)=>{
  db.query('SELECT * FROM users', (err, res) => {
    // console.log(err);
    cb(res.rows);
  });
};

exports.createUser = (data, cb) => {
  const q = 'INSERT INTO users(email, password, username, pin) VALUES ($1, $2, $3, $4) RETURNING *';
  const val = [data.email, data.password, data.username, data.pin];
  db.query(q, val, (err, res) => {
    cb(res.rows);
  });
};

exports.updateUser = (id, data, cb) => {
  const q = 'UPDATE users SET email=$1, password=$2, username=$3, pin=$4 WHERE id=$5 RETURNING *';
  const val = [data.email, data.password, data.username, data.pin, id];
  db.query(q, val, (err, res) => {
    if(err) {
      console.log(err);
    }
    cb(res.rows);
  });
};
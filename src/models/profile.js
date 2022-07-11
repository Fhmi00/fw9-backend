const db = require('../helpers/db');

exports.getAllProfile = (cb)=>{
  db.query('SELECT * FROM profile ORDER BY id ASC', (err, res) => {
    // console.log(err);
    cb(res.rows);
  });
};

exports.createProfile = (data, cb) => {
  const q = 'INSERT INTO profile(fullname, phonenumber, balance, picture) VALUES ($1, $2, $3, $4) RETURNING *';
  const val = [data.fullname, data.phonenumber, data.balance, data.picture];
  db.query(q, val, (err, res) => {
    if(err) {
      console.log(err);
    }
    cb(res);
  });
};

exports.updateProfile = (id, picture, data, cb) => {
  const q = 'UPDATE profile SET picture=$1, fullname=$3, balance=$5, phonenumber=$4 WHERE id=$2 RETURNING *';
  const val = [picture, id, data.fullname, data.phonenumber, data.balance];
  db.query(q, val, (err, res) => {
    cb(err, res);
  });
};

exports.deleteProfile = (id, cb) => {
  const q = 'DELETE FROM profile WHERE id=$1 RETURNING *';
  const val = [id];
  db.query(q, val, (err, res) => {
    cb(res.rows);
  });
};
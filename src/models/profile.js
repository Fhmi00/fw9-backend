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
  let val = [id];
  const filtered = {};
  const obj = {
    picture,
    fullname: data.fullname,
    phonenumber: data.phonenumber,
    balance: data.balance
  };

  for(let x in obj) {
    if(obj[x]!==null){
      filtered[x] = obj[x];
      val.push(obj[x]);
    }
  }

  const key = Object.keys(filtered);
  const finalResult = key.map((o, ind) => `${o}=$${ind+2}`);
  const q = `UPDATE profile SET ${finalResult} WHERE id=$1 RETURNING *`;
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
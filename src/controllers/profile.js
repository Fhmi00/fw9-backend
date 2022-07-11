const response = require('../helpers/standardresponse');
const profileModel = require('../models/profile');
const {validationResult} = require('express-validator');
const upload = require('../helpers/uploads');

exports.getAllProfile = (req, res) => {
  console.log(req.file);
  profileModel.getAllProfile((results) => {
    return response(res, 'message from standard response', results);
  });    
};

exports.createProfile = (req, res) => {
  profileModel.createProfile(req.body, (results) => {
    upload(req, res, (err) => {
      if(err) {
        console.log(err);
        return response(res, `update failed: ${err.message}`, null, null, 400);
      }
      return response(res, 'create profile succesfully', results[0]);
    }); 
  });
};


exports.editProfile = (req, res) => {
  const {id} = req.params;
  const eror = validationResult(req);
  if(!eror.isEmpty()) {
    return response(res, 'validation error', eror.array(), null, 400);
  }
  profileModel.updateProfile(id, req.file.filename, req.body, (err, results) => {
    if(err){
      return response(res, `update failed: ${err.message}`,null, null, 400);
    }
    return response(res, 'update success', results.rows[0]);
  });
};

exports.deleteProfile = (req, res) => {
  const {id} = req.params;
  profileModel.deleteProfile(id, (results) => {
    return response(res, 'profile deleted!', results[0]);
  });
};
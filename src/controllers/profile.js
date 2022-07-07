const response = require('../helpers/standardresponse');

const profileModel = require('../models/profile');

exports.getAllProfile = (req, res) => {
  console.log(req.file);
  profileModel.getAllProfile((results) => {
    return response(res, 'message from standard response', results);
  });    
};

exports.createProfile = (req, res) => {
  profileModel.createProfile(req.body, (results) => {
    return response(res, 'create profile succesfully', results[0]);
  });
};


exports.editProfile = (req, res) => {
  const {id} = req.params;
  profileModel.updateProfile(id, req.body, (results) => {
    return response(res, 'Update data success!', results[0]);
  });
};

exports.deleteProfile = (req, res) => {
  const {id} = req.params;
  profileModel.deleteProfile(id, (results) => {
    return response(res, 'profile deleted!', results[0]);
  });
};
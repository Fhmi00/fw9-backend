const upload = require('../helpers/uploads').single('picture');
const response = require('../helpers/standardresponse');


const uploadProfile = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      return response(res, `error: ${err.message}`, null, null, 400);
    }
    next();
  });
};

module.exports = uploadProfile;
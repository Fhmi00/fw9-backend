const response = require('./standardresponse');

const errorHandling = (msg, param, location = 'body') => [
  {
    msg,
    param,
    location
  }
];

const errResponse = (err, res) => {
  if(err.code === '23505' && err.detail.includes('email')) {
    const eres = errorHandling('Email already exist', 'email');
    return response(res, 'error', eres, null, 400);
  }
  if(err.code === '23505' && err.detail.includes('username')){
    const eres = errorHandling('username already exist', 'username');
    return response(res, 'error', eres, null, 400);
  }
  console.log(err);
  return response(res, 'error', null, null, 400);
};

module.exports = errResponse;
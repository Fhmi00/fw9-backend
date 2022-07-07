require('dotenv').config();

const express = require('express');

const app = express();

// eslint-disable-next-line no-undef
global.__basepath = __dirname;

app.use(express.urlencoded({extended: false}));

app.get('/', (req,res)=> {
  return res.json({
    success: true,
    massage: 'Backend is running well'
  });
});

app.use('/', require('./src/routes'));

app.use('*', (req, res)=> {
  return res.status(404).json({
    success: false,
    massage: 'resource not found'
  });
});

// eslint-disable-next-line no-undef
app.listen(process.env.PORT, ()=> {
  console.log('app is running on port 3333');
});
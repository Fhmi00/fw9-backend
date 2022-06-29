const {Pool} = require('pg');

// eslint-disable-next-line no-undef
const {DATABASE_URL: connectionstring} = process.env;

const db = new Pool({
  connectionstring
});

module.exports = db;
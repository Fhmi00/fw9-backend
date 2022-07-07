const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(global.__basepath, 'assets', 'uploads'));
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime();
    const ext = file.mimetype.split('/')[1];
    cb(null, `${timestamp}.${ext}`);
  }
});

const upload = multer({
  storage,
 
  fileFilter: (req, file, cb) => {
    console.log(file);
    cb(null, true);
  }
});

module.exports = upload;
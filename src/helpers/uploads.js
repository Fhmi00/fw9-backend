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
  limits: {
    fileSize : 1 * 1000 * 1000
  },
  fileFilter: (req, file, cb) => {
    const extType = ['image/png', 'image/jpeg', 'image/webp'];
    if(extType.includes(file.mimetype)) {
      cb(null, true);
    } else {
      const err = new Error('the file you uploaded is not image');
      cb(err, false);
    }
  }
});

module.exports = upload;
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, DIR);
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
  }
});

const DIR = './public/';

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
  }
});


const controller = async (req, res)=>{
  const url = req.protocol + '://' + req.get('host') + '/public/' + req.file.filename;
  try{
    const response = {
      url: url
    }
    res.send(response)
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
}

const middleware = [upload.single('file'), controller];
module.exports = middleware;
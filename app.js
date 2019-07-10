//STILL WORKING OVER
const express = require("express"),
multer        = require("multer"),
ejs           = require("ejs"),
path          = require("path");

//Set Storage Engine
const storage = multer.diskStorage({
    /*saves or uploads the file to the server, in our case
       the server is our pc so the files gets uploaded
       to ./public/uploads directory 
    */

    /*
     The name of the file saved in ./public/upload directory
     will be difined by filename
    */
    destination: './public/uploads',
    filename: function(req, file, cb){
        cb(null, file.filename + '-' + Date.now() +
         path.extname(file.originalname));
    }
});

//Init Upload
const upload = multer({
    storage: storage,
    //to set the limit of the files uploaded and it is in bytes
    limits: {fileSize: 1000000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
}).single('myImage');
// .array can be used in order to upload multiple files
// myImage is from index.ejs - <input name="myImage" type="file">

// Check File type
function checkFileType(file, cb) {
    // Allowed ext
}

//Init app
const app = express();

//EJS
app.set('view engine', 'ejs');

//Public Folder
app.use(express.static("./public"));

//Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if(err){
            res.render('index', {
                msg: err
            });
        } else {
            console.log(req.file);
            res.send('test');
        }
    });
});
 /**
  * This is all the information printed from req.file above
    and can be used in in multiple ways
  
  { fieldname: 'myImage',
  originalname: 'index.html',
  encoding: '7bit',
  mimetype: 'text/html',
  destination: './public/uploads',
  filename: 'undefined-1562740250883.html',
  path: 'public\\uploads\\undefined-1562740250883.html',
  size: 2431 }
  */



const port = 3000;

app.listen(port, () => {
    console.log(`Server is started at port ${port}`);
});
const express = require('express');
const dotenv= require('dotenv').config();
const app = express();
const port = 3000;
const path = require('path');
const connectDB=require('./config/db')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// connectDB()

// use imports 


app.use(express.json());
// app.use(cors({
//   origin: ['http://localhost:3000'] // only accept requests from localhost:3000 header
// }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});




app.get('/homepage', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});


app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
  const files = req.files
  if (!files) {
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(files)
})

app.get('/photos', (req, res) => {
  db.collection('mycollection').find().toArray((err, result) => {
  
        const imgArray= result.map(element => element._id);
              console.log(imgArray);
  
     if (err) return console.log(err)
     res.send(imgArray)
  
    })
});

app.post('/submit', (req, res) => {
  res.send({ "message": "something"});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

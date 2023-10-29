const express = require('express');
const asyncHandler = require('express-async-handler')
const dotenv= require('dotenv').config();
const app = express();
const { connectDB } = require('./config/db')
const port = process.env.PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const homepageRouter = require('./Routes/homepageRouter');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer  = require('multer')
const { errorHandler } = require('./middleware/errorMiddleware')
const Text = require('./models/pageModel');
const { appendFile } = require('fs/promises');
const fs = require('fs');
// use imports 

connectDB()

// sets views for ejs (it is under client folder)
app.set('views', path.join(__dirname, '/../client/views'))
app.set('view engine', 'ejs');


app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.use("/homepage", homepageRouter);


// use imports 

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
// Set up the storage engine for multer
const storage = multer.memoryStorage(); // Store image data in memory
const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
});


// app.use(cors({
//   origin: ['http://localhost:3000'] // only accept requests from localhost:3000 header
// }));
app.use('/api/rooms', require('./routes/roomRoutes'))

app.use(errorHandler)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/homepage', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.get('/room', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/room.html'));
});

app.get('/nice', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/homepage/nice.html'));
});

app.get('/guestroom',(req, res) => {

  roomNo = req.session.room;
  res.render("guestroom", {room: roomNo});

});
app.post('/submit', (req, res) => {
  res.send({ "message": "something"});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Handle image uploads
app.post('/upload', upload.single('textFile'),async (req, res) => {

   // Path to your default PNG image
   const defaultImagePath = path.join(__dirname, './uploads/mttext');
   const defaultImageBuffer = fs.readFileSync(defaultImagePath);
   
  try {
    const room = await Text.create({
      keyroom: req.session.key,
      hostid: 6565,
      password: 12345,
      imageData: defaultImageBuffer,
    });

    res.status(201).json(room)

    res.status(201).send('Image uploaded successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading image');
  }
});

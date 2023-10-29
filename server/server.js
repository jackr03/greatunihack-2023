const express = require('express');
const dotenv= require('dotenv').config();
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const homepageRouter = require('./Routes/homepageRouter');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const { connectDB } = require('./config/db')
const port = process.env.PORT || 5000;
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const { errorHandler } = require('./middleware/errorMiddleware')
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

// app.use(cors({
//   origin: ['http://localhost:3000'] // only accept requests from localhost:3000 header
// }));

app.get('/', (req, res) => {
  res.send("Hello World.");
});
app.use('/api/rooms', require('./routes/roomRoutes'))

app.use(errorHandler)



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



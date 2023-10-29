const express = require('express');
const dotenv= require('dotenv').config();
const app = express();
const { connectDB } = require('./config/db')
const port = process.env.PORT || 5000;
const path = require('path');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const { errorHandler } = require('./middleware/errorMiddleware')
// use imports 

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
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

app.post('/submit', (req, res) => {
  res.send({ "message": "something"});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

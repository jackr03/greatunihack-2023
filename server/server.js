const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const homepageRouter = require('./Routes/homepageRouter');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// sets views for ejs (it is under client folder)
app.set('views', path.join(__dirname, '/../client/views'))
app.set('view engine', 'ejs');




app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.use("/homepage", homepageRouter);

app.get('/', (req, res) => {
  res.send("Hello World.");
});

app.get('/guestroom',(req, res) => {

    roomNo = req.session.room;
    res.render("guestroom", {room: roomNo});

});


app.get('/nice', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/homepage/nice.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



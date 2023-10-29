const express = require('express');
const homepageRouter = express.Router();
const path = require('path');

homepageRouter.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, '/../../client/homepage/index.html'));
  //res.send("hello world");
    res.render("index", {username: "kyan"});

});



homepageRouter.post('/tryjoin', (req, res) => {
  //res.sendFile(path.join(__dirname, '/../../client/homepage/index.html'));
  //res.send("hello world");
  console.log("hi");
  console.log(req.body);
  const room = req.body.room;
  console.log(room);
  
  req.session.room = room; 
    
  res.json("ok");
    //res.render("index", {username: "kyan"});

});


homepageRouter.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/../../client/homepage/stylesheet.css'));
    //res.send("hello world");
  });

  homepageRouter.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '/../../client/homepage/scripts.js'));
    //res.send("hello world");
  });

// You can continue defining other routes here

module.exports = homepageRouter;


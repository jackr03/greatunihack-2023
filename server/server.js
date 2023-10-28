const express = require('express');
const app = express();
const port = 3000;
const path = require('path');



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


app.post('/submit', (req, res) => {
      res.send({ "message": "something"});
      

})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

require('dotenv').config();
const express = require('express');
const App = express();

App.get('/', (req,res) =>{
  res.send('Hi!');
})

App.listen(process.env.PORT || 3000, () =>{
  console.log('Im listening well');
})
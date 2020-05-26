require('dotenv').config();
const express = require('express');
const App = express();
const path = require('path');


App.set('views', path.join(__dirname, 'views'));
App.use(express.static(__dirname + '/assets'));
App.set("view engine", "pug");

App.get('/', (req,res) =>{
  res.render('index', {title: 'Illich', message: ' This is a message!'});
})

App.listen(process.env.PORT || 3000, () =>{
  console.log('Im listening well');
})
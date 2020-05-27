require('dotenv').config();
const express = require('express');
const App = express();
const path = require('path');


App.set('views', path.join(__dirname, 'views'));
App.use(express.static("public"));
App.set("view engine", "pug");

App.get('/', (req,res) =>{
  res.render('index', {title: 'Illich', message: ' This is a message!'});
})

App.get('/api/timestamp', (req,res) => {
  const timeDate = new Date();
  res.render('result', { unix: timeDate.getTime(), utc: timeDate.toUTCString()});
})

App.get('/api/timestamp/:time?', (req,res) =>{
  try {
    const timeDate = createDate(req.params.time);
    res.render('result',{unix: timeDate.getTime(), utc: timeDate.toUTCString()});
  } catch (error) {
    res.send(error);
  }
})

function createDate(date){
  return(
    date.includes('-') ?
    new Date(date) :
    new Date(+date)
  )
}

App.listen(process.env.PORT || 3000, () =>{
  console.log('Im listening well');
})
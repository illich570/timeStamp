require('dotenv').config();
const express = require('express');
const App = express();
const path = require('path');
const cors = require('cors');


App.set('views', path.join(__dirname, 'views'));
App.use(express.static(__dirname + '/public'));
App.set("view engine", "pug");
App.use(cors());

App.get('/', (req,res) =>{
  res.render('layout',
  {
    query: false, title: 'tu mama'
  });
})

App.get("/api/timestamp", (req, res) => {
  const timeDate = new Date();
  res.render("layout", {
    query: true,
    time: timeDate
  });
});

App.get('/api/timestamp/:time?', (req,res) =>{
    const timeDate = createDate(req.params.time);
    timeDate == 'Invalid Date' ?
      res.render('error') :
      res.render('layout',
      {query: true, time: timeDate});
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
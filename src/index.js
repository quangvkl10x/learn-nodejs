const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

// HTTP Logger
app.use(morgan('combined'));


// Template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

// Middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

console.log(path.join(__dirname, 'resoucres/views'))

app.get('/search', (req, res) => {
  res.render('home');
})

app.post('/search', (req, res) => {
  
  res.send('');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
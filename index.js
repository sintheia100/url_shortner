const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const db = mongoose.connection;
const cors = require('cors');
const urlRouter = require('./routes/urlRoute'); 
const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.oyujz.mongodb.net/assignments?retryWrites=true&w=majority'
 
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
/** this project needs a db !! **/ 
mongoose.connect(MONGO_URI); 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connection successful')); 


app.use(express.static("public"));
app.set('view engine', 'pug'); 
app.get('/', (req, res) => {
  res.render('index')
});

app.use('/api', urlRouter);

var listener = app.listen(process.env.PORT || 5500, function () {
    console.log("Your app is listening on port " + listener.address().port);
  });
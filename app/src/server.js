require('dotenv').config();
require('./data/main.js').init(); // Initialize the data tier

const express = require('express'),
      helmet = require('helmet'),
      morgan = require('morgan'),
      cors = require('cors'),
      { auth } = require('./middleware/auth.js'),
      router = require('./controllers/main.js');
      
const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(router);

if(process.env.ENV==='test'){
      module.exports = app;
}
else{
      app.listen(process.env.PORT, ()=>console.log(`Started app server at ${process.env.PORT}.`));
}
require('dotenv').config()
const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const app = express();
const RouterCustom = require('./api')

 /* Global DB connection */
global.DBConnection = require('./db.config')
/* Parse application/json */
app.use(bodyParse.json());

/* Parse application/x-www-form-urlencoded */
app.use(bodyParse.urlencoded ({extended:false}));
 
/* Use custom routes in app */
 new RouterCustom(app);

/* Enable cors */
app.use(cors());

app.use(express.static('public'));
/* 404 middleware */
app.use(function (req, res, next) {
    res.statusCode = 404;
    res.sendFile('404.html', { root: `${ROOT_DIR}/public` });
  });
  
  /* Internal server error middleware */
  app.use(function (err, req, res, next) {
    ERROR(err);
    res.statusCode = 500;
    res.sendFile('500.html', { root: `${ROOT_DIR}/public` });
  });
  

app.listen(process.env.PORT, () =>{
    console.log(`🚀️ Application running on port ${process.env.PORT}`);
})
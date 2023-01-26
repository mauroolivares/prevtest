'use strict';

const app = require('./server');

app.listen(3000, () => console.log('Local app listening on port 3000!'));


//const dotenv = require('dotenv').config();
//const PORT = process.env.PORT || '3000'
//server port




/* 
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en puerto: ${PORT}.`);
  });
};

startServer(); */
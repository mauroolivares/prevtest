const app = require('./server');
//const dotenv = require('dotenv').config();
//const PORT = process.env.PORT || '3000'
//server port

const serverless = require('serverless-http');

module.exports.handler = serverless(app);

/* 
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en puerto: ${PORT}.`);
  });
};

startServer(); */
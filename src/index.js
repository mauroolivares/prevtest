const server = require('./server');
//const dotenv = require('dotenv').config();
const PORT = process.env.PORT || '3000'
//server port


const startServer = () => {
  server.listen(PORT, () => {
    console.log(`Servidor ejecutandose en puerto: ${PORT}.`);
  });
};

startServer();
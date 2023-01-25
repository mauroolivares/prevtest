const server = require('./server');
const dotenv = require('dotenv').config();

//server port


const startServer = () => {
  server.listen(process.env.LOCALPORT, async () => {
    console.log(`Server running on port ${process.env.LOCALPORT}.`);
  });
};

startServer();
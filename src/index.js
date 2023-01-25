const server = require('./server');
const {delay} = require('./utils/various');

//server port
const localport =  3000;

const startServer = () => {
  server.listen(localport, async () => {
    await delay(6000);
    console.log(`Server running on port ${localport}.`);
  });
};

startServer();
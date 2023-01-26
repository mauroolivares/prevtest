const dev = "http://localhost:3000";
const prod = "";
const URL = process.env.NODE_ENV ? prod : dev;

module.exports = URL;

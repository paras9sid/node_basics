//package imports
const http = require("http");

//file imports
const routes = require("./routes");

console.log(routes.someText);

const server = http.createServer(routes.handler); // as handler has requesthandler funciton assigned to it.

server.listen(3000);

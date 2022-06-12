const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("wordlist.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(10004, () => {
  console.log("JSON Server is running");
});

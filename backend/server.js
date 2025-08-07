const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.db = router.db;

server.use(middlewares);


server.use(jsonServer.bodyParser);

// Add authentication middleware
server.use(auth);

// Use default router
server.use(router);

const port = 5001;
server.listen(port, () => {
  console.log(`JSON Server with Auth is running on port ${port}`);
  console.log(`Register: POST http://localhost:${port}/register`);
  console.log(`Login: POST http://localhost:${port}/login`);
  console.log(`Users: GET http://localhost:${port}/users`);
});
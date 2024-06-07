import jsonServer from 'json-server';
import express from 'express';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);

const app = express();

app.use(express.json());
app.use('/api', server);

app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

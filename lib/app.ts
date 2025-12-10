import 'dotenv/config';
import http from 'http';
import db from './database.js';
import Router from './router.js';

// initialize database connection
await db.verifyConnection();

// initialize router
var router = new Router();

var app = http.createServer((req: any, res: any) => {
  router.get(req.url, req, res);
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`Server is listening on port ${process.env.PORT || 3000}`);
});

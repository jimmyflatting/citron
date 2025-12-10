import http from 'http';
import Database from './database.js';
import Router from './router.js';

// initialize database connection
var db = new Database();
if (!db.init()) {
  throw new Error('Failed to connect to the database');
}

// initialize router
var router = new Router();

var app = http.createServer((req: any, res: any) => {
  router.get(req.url, req, res);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Server is listening on port ' + (process.env.PORT || 3000));
});

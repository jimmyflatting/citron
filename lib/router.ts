class Router {
  constructor() {
    // Router initialization code
  }

  get(path: string, req: any, res: any) {
    if (req.method !== 'GET') {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method Not Allowed\n');
      return;
    }

    console.log(req.url);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
    console.log(`Navigating to ${path}`);
    return;
  }

  post(path: string, data: any, req: any, res: any) {
    console.log(`Posting to ${path} with data:`, data);
  }

  put(path: string, data: any, req: any, res: any) {
    console.log(`Putting to ${path} with data:`, data);
  }

  delete(path: string, req: any, res: any) {
    console.log(`Deleting ${path}`);
  }
}

export default Router;

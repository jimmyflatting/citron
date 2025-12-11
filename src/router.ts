import {
    Express,
    Request,
    Response,
    NextFunction,
    RequestHandler,
} from 'express';

// type RouteHandler = (req?: Request, res?: Response, next?: NextFunction) => any;
type RouteHandler = () => any;
interface Route {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    handler: RouteHandler;
    middleware: RequestHandler[];
}

export class Router {
    private routes: Route[] = [];

    get(
        path: string,
        handler: RouteHandler,
        ...middleware: RequestHandler[]
    ): Router {
        this.routes.push({
            method: 'GET',
            path,
            handler,
            middleware,
        });
        return this;
    }

    post(
        path: string,
        handler: RouteHandler,
        ...middleware: RequestHandler[]
    ): Router {
        this.routes.push({
            method: 'POST',
            path,
            handler,
            middleware,
        });
        return this;
    }

    put(
        path: string,
        handler: RouteHandler,
        ...middleware: RequestHandler[]
    ): Router {
        this.routes.push({
            method: 'PUT',
            path,
            handler,
            middleware,
        });
        return this;
    }

    delete(
        path: string,
        handler: RouteHandler,
        ...middleware: RequestHandler[]
    ): Router {
        this.routes.push({
            method: 'DELETE',
            path,
            handler,
            middleware,
        });
        return this;
    }

    patch(
        path: string,
        handler: RouteHandler,
        ...middleware: RequestHandler[]
    ): Router {
        this.routes.push({
            method: 'PATCH',
            path,
            handler,
            middleware,
        });
        return this;
    }

    // Register all routes with Express app
    registerRoutes(app: Express): void {
        this.routes.forEach((route) => {
            const expressHandler = (
                req: Request,
                res: Response,
                next: NextFunction
            ) => {
                try {
                    const result = route.handler();
                    console.log(result);
                    console.log(typeof result);

                    // If handler returns a string, send it as response
                    if (typeof result === 'string' && !res.headersSent) {
                        res.send(result);
                    }
                } catch (error) {
                    next(error);
                }
            };

            // register route with middleware
            switch (route.method) {
                case 'GET':
                    app.get(route.path, ...route.middleware, expressHandler);
                    break;
                case 'POST':
                    app.post(route.path, ...route.middleware, expressHandler);
                    break;
                case 'PUT':
                    app.put(route.path, ...route.middleware, expressHandler);
                    break;
                case 'DELETE':
                    app.delete(route.path, ...route.middleware, expressHandler);
                    break;
                case 'PATCH':
                    app.patch(route.path, ...route.middleware, expressHandler);
                    break;
            }
        });
    }

    getRoutes(): Route[] {
        return [...this.routes];
    }
}

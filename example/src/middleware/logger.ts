import {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from '@jimmyflatting/lemonjs';

export function loggerMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    console.log(`Request method: ${req.method}, Request path: ${req.path}`);
    next();
}

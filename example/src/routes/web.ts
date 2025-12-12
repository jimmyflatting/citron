import { Router, RequestHandler } from '@jimmyflatting/lemonjs';
import { aboutController } from '../controllers/AboutController';
import { homeController } from '../controllers/HomeController';
import {
    loggerMiddleware,
    cancelRequestMiddleware,
} from '../middleware/logger';

let middleware: RequestHandler[] = [loggerMiddleware, cancelRequestMiddleware];

// Web routes - Laravel style
export function registerWebRoutes(router: Router): void {
    // Home routes
    router.get('/', homeController.index, ...middleware);

    // About routes
    router.get('/about', aboutController.index, ...middleware);
    router.get('/about/team', aboutController.team);
}

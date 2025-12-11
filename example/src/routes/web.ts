import { Router, RequestHandler } from '@jimmyflatting/lemonjs';
import { aboutController } from '@/controllers/AboutController';
import { homeController } from '@/controllers/HomeController';

let middleware: RequestHandler[] = [];

// Web routes - Laravel style
export function registerWebRoutes(router: Router): void {
    // Home routes
    router.get('/', homeController.index.bind(homeController), ...middleware);

    // About routes
    router.get('/about', aboutController.index.bind(aboutController));
    router.get('/about/team', aboutController.team.bind(aboutController));
}

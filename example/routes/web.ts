import { Router } from '../../src/router';
import { aboutController } from '../../src/controller';
import { homeController } from '../controllers/HomeController';
import { RequestHandler } from 'express';

let middleware: RequestHandler[] = [];

// Web routes - Laravel style
export function registerWebRoutes(router: Router): void {
    // Home routes
    router.get('/', homeController.index.bind(homeController), ...middleware);

    // About routes
    router.get('/about', aboutController.index.bind(aboutController));
    router.get('/about/team', aboutController.team.bind(aboutController));
}

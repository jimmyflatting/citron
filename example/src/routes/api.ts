import { Router, RequestHandler } from '@jimmyflatting/lemonjs';
import { bookController } from '../controllers/BookController';

let middleware: RequestHandler[] = [];

export function registerApiRoutes(router: Router): void {
    router.get('/api/books', bookController.index);
    router.post('/api/books', bookController.store);
    router.get('/api/books/:id', bookController.show);
    router.put('/api/books/:id', bookController.update);
    router.delete('/api/books/:id', bookController.destroy);
}

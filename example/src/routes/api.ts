import { Router, RequestHandler } from '@jimmyflatting/lemonjs';
import { bookController } from '@/controllers/BookController';

let middleware: RequestHandler[] = [];

export function registerApiRoutes(router: Router): void {
    router.get('/api/books', bookController.index.bind(bookController));
    router.post('/api/books', bookController.store.bind(bookController));
    router.get('/api/books/:id', bookController.show.bind(bookController));
    router.put('/api/books/:id', bookController.update.bind(bookController));
    router.delete(
        '/api/books/:id',
        bookController.destroy.bind(bookController)
    );
}

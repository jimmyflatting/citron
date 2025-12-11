import { Router } from '../../src/router';
import { userController } from '../../src/controller';

export function registerApiRoutes(router: Router): void {
    router.get('/api/users', userController.index.bind(userController));
    router.post('/api/users', userController.store.bind(userController));
    router.get('/api/users/:id', userController.show.bind(userController));
    router.put('/api/users/:id', userController.update.bind(userController));
    router.delete(
        '/api/users/:id',
        userController.destroy.bind(userController)
    );
}

import express, { Express } from 'express';
import http from 'http';
import { Router } from './router';

export class App {
    private app: Express;
    private server: http.Server | null = null;
    private router: Router;

    constructor(router: Router) {
        this.app = express();
        this.router = router;
        this.setupMiddleware();
        this.setupRoutes();
    }

    private setupMiddleware(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private setupRoutes(): void {
        this.router.registerRoutes(this.app);
    }

    start(port: number): void {
        this.server = this.app.listen(port, () => {
            console.log(`🍋 Citron server is running on port ${port}`);
            if (process.env.NODE_ENV && process.env.NODE_ENV !== 'production') {
                console.log(`DEBUG: Environment: ${process.env.NODE_ENV}`);
                console.log(
                    `DEBUG: Registered ${
                        this.router.getRoutes().length
                    } route(s)`
                );
            }
        });
    }

    stop(): void {
        if (this.server) {
            this.server.close(() => {
                console.log('Server has been stopped');
            });
        }
    }

    // Get Express app instance for advanced configuration
    getApp(): Express {
        return this.app;
    }
}

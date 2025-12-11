import { App, Router } from '@jimmyflatting/lemonjs';
import dotenv from 'dotenv';
import { registerWebRoutes } from './example/routes/web';
import { registerApiRoutes } from './example/routes/api';

// Load environment variables from .env file
dotenv.config();

// Initialize Router and routes
const router = new Router();
registerApiRoutes(router);
registerWebRoutes(router);

// Initialize and start the App
const app = new App(router);
app.start(process.env.PORT ? Number(process.env.PORT) : 3000);

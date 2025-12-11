import dotenv from 'dotenv';
import { App, Router } from '@jimmyflatting/lemonjs';
import { registerWebRoutes } from './src/routes/web';
import { registerApiRoutes } from './src/routes/api';

// Load environment variables from .env file
dotenv.config();

// Initialize Router and routes
const router = new Router();
registerApiRoutes(router);
registerWebRoutes(router);

// Initialize and start the App
const app = new App(router);
app.start(process.env.PORT ? Number(process.env.PORT) : 3000);

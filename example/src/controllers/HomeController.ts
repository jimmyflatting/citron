import { Controller } from '@jimmyflatting/lemonjs';

class HomeController extends Controller {
    index(): string {
        let data = `<h1>🍋 Welcome to LemonJS!</h1>`;
        return data;
    }
}

export const homeController = new HomeController();

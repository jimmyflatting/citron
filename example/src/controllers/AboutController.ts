import { Controller } from '@jimmyflatting/lemonjs';

class AboutController extends Controller {
    index(): string {
        return `About LemonJS`;
    }

    team(): string {
        return `About the Team`;
    }
}

export const aboutController = new AboutController();

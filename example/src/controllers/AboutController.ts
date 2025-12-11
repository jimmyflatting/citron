import {
    Controller,
    Request,
    Response,
    NextFunction,
} from '@jimmyflatting/lemonjs';

export class AboutController extends Controller {
    index(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);

        return `About LemonJS`;
    }

    team(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);

        return `About the Team`;
    }
}
export const aboutController = new AboutController();

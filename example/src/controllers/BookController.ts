import {
    Controller,
    Request,
    Response,
    NextFunction,
} from '@jimmyflatting/lemonjs';

export class BookController extends Controller {
    index(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);

        return res?.json({
            message: 'List of Books',
            data: ['Book 1', 'Book 2', 'Book 3'],
        }) as unknown as string;
    }

    store(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);

        return res?.json({
            message: 'Store a new Book',
        }) as unknown as string;
    }

    show(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);
        const id = req?.params.id;

        return res?.json({
            message: `Displaying Book: ${id}`,
        }) as unknown as string;
    }

    update(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);
        const id = req?.params.id;

        return res?.json({
            message: `Updating Book: ${id}`,
        }) as unknown as string;
    }

    destroy(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);
        const id = req?.params.id;

        return res?.json({
            message: `Deleting Book: ${id}`,
        }) as unknown as string;
    }
}
export const bookController = new BookController();

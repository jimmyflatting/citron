import { Request, Response, NextFunction } from 'express';

export class Controller {
    protected req?: Request;
    protected res?: Response;
    protected next?: NextFunction;

    protected setContext(
        req?: Request,
        res?: Response,
        next?: NextFunction
    ): void {
        this.req = req;
        this.res = res;
        this.next = next;
    }
}

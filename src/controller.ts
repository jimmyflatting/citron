import e, { Request, Response, NextFunction } from 'express';

export class Controller {
    // Base controller functionality can be added here
    protected req?: Request;
    protected res?: Response;
    protected next?: NextFunction;

    // Helper method to set request context
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

// Home/Landing page controller
class HomeController extends Controller {
    index(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);
        return `🍋 Welcome to LemonJS!123`;
    }
}
export const homeController = new HomeController();

// About page controller
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

// Example resource controller (like Laravel Resource Controllers)
class UserController extends Controller {
    // Display a listing of users
    index(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);
        return `Users Index - List all users`;
    }

    // Show the form for creating a new user
    create(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);
        return `Users Create - Show form to create new user`;
    }

    // Store a newly created user
    store(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);
        return `Users Store - Create new user (POST)`;
    }

    // Display the specified user
    show(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);
        const id = req?.params.id;
        return `Users Show - Display user ${id}`;
    }

    // Show the form for editing the specified user
    edit(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);
        const id = req?.params.id;
        return `Users Edit - Show form to edit user ${id}`;
    }

    // Update the specified user
    update(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);
        const id = req?.params.id;
        return `Users Update - Update user ${id} (PUT)`;
    }

    // Remove the specified user
    destroy(req?: Request, res?: Response, next?: NextFunction): string {
        this.setContext(req, res, next);
        const id = req?.params.id;
        return `Users Destroy - Delete user ${id} (DELETE)`;
    }
}
export const userController = new UserController();

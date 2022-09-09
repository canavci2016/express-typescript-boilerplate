import { Router } from 'express';

abstract class Base {
    #_router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    get router(): Router {
        return this.#_router;
    }

    set router(value: Router) {
        this.#_router = value;
    }

    public abstract initializeRoutes(): void;

}


export default Base;
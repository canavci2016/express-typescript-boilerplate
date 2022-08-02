import {Request, Response} from 'express';
import Base from "./base";
import UserService from "../services/user";

class Profile extends Base {

    constructor() {
        super();
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get('/cc', this.getUser);
    }

    private async getUser(req: Request, res: Response) {
        const user = await UserService.getById(req.query.id.toString());
        res.json(user);
    }

}

export default new Profile();
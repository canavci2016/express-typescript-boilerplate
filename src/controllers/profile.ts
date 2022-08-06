import {Request, Response} from 'express';
import Base from "./base";
import UserService from "../services/user";
import updateUserDto from "..//dtos/request/updateUser";

class Profile extends Base {

    constructor() {
        super();
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get('/detail', this.getUser);
        this.router.get('/update', this.getUser);
    }

    private async getUser(req: Request, res: Response) {
        const user = await UserService.getById(req.query.id.toString());
        res.json(user);
    }

    private updateUser(req: Request, res: Response) {
        const user = UserService.update(updateUserDto(req.body), req.body);
    }

}

export default new Profile();
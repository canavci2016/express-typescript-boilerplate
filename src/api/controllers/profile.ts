import { Request, Response } from 'express';
import Base from "./base";
import UserService from "../../services/user";
import updateUserDto from "../../dtos/request/updateUser";


class Profile extends Base {

    public initializeRoutes(): void {
        this.router.get('/detail', this.getUser);
        this.router.get('/update', this.updateUser);
    }

    private async getUser(req: Request, res: Response) {
        const user = await UserService.getById(req.query.id.toString());
        res.json(user);
    }

    private async updateUser(req: Request, res: Response) {
        let authUser = await UserService.getById(req.query.id.toString());
        const dto = updateUserDto({
            name: "can",
            lastName: "avci",
            about: "ccc",
            birthDate: "23-10-1993",
            homeCity: "canada",
            homeTown: "turkey",
            educations: [{ education: "trakya university", orderNo: 2 }],
            jobs: [{ job: "software Engineer", orderNo: 2 }]
        });
        const user = UserService.update(dto, authUser);

        res.send(user);
    }

}

export default new Profile();
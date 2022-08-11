import UserModel, {IUser as AuthUser} from "../models/user";
import {updateUser as updateUserDto} from "../dtos/request/updateUser";


class User {

    public static async getById(id: string): Promise<AuthUser> {
        return UserModel.findById(id);
    }

    public static update(body: updateUserDto, authUser: AuthUser): updateUserDto {

        authUser.name = body.name;
        authUser.lastName = body.lastName;
        authUser.jobs = body.jobs.map(j => ({title: j.job, order: j.orderNo}));
        authUser.educations = body.educations.map(e => ({title: e.education, order: e.orderNo}));
        authUser.save();

        return body;
    }


}


export default User;
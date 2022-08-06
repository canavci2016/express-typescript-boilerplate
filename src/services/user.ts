import UserModel from "../models/user";
import {UserWithToken as UserWithTokenInterface} from "../interfaces/controllers/User";
import {AuthUser} from "../interfaces/common/AuthUser";
import {updateUser as updateUserDto} from "../dtos/request/updateUser";


class User {

    public static async getById(id: string): Promise<UserWithTokenInterface> {
        return UserModel.findById(id);
    }

    public static update(body: updateUserDto, authUser: AuthUser): updateUserDto {

        const education = body.educations.map(e => ({
            education: e.education,
            educationProfileOrderIndex: parseInt(e.orderNo),
        }));

        const jobBulk = body.jobs.map(j => ({
            jobExperience: j.job,
            jobExperienceOrderIndex: parseInt(j.orderNo),
        }));

        return body;
    }


}


export default User;
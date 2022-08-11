import UserModel, {IUser as AuthUser} from "../models/user";
import {updateUser as updateUserDto} from "../dtos/request/updateUser";


class User {

    public static async getById(id: string): Promise<AuthUser> {
        return UserModel.findById(id);
    }

    public static update(body: updateUserDto, authUser: AuthUser): updateUserDto {

        const education = body.educations.map(e => ({
            education: e.education,
            educationProfileOrderIndex: e.orderNo,
        }));

        const jobBulk = body.jobs.map(j => ({
            jobExperience: j.job,
            jobExperienceOrderIndex: j.orderNo,
        }));

        authUser.name = body.name;
        authUser.lastName = body.lastName;
        authUser.jobs = jobBulk;
        authUser.educations = education;
        authUser.save();

        return body;
    }


}


export default User;
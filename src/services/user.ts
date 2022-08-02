import UserModel from "../models/user";
import {UserWithToken as UserWithTokenInterface, User as UserInterface} from "../interfaces/controllers/user";


class User {

    public static async getById(id: string): Promise<UserWithTokenInterface> {
        return UserModel.findById(id);
    }

}


export default User;
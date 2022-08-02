import {Schema, model} from 'mongoose';


interface IUser {
    name: string;
    lastName: string;
    email: string;
    mobile: string;
    jobs: string[];
}


const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    mobile: {type: String, required: true},
    jobs: [{type: String, required: true}],
});

const User = model<IUser>('User', userSchema);


export default User;
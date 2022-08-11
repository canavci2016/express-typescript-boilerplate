import {Schema, model} from 'mongoose';

interface TitleAndOrder {
    title: string;
    order: number;
}

interface Job extends TitleAndOrder {

}

interface Education extends TitleAndOrder {

}


export interface IUser {
    name: string;
    lastName: string;
    email: string;
    mobile: string;
    jobs: Job[];
    educations: Education[];
    save: () => void;
}


const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    mobile: {type: String, required: true},
    educations: [{type: {title: String, order: Number,}, required: true}],
    jobs: [{type: {title: String, order: Number}, required: true}],
});

const User = model<IUser>('User', userSchema);


export default User;
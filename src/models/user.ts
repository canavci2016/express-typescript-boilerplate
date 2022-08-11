import {Schema, model} from 'mongoose';


interface Job {
    jobExperience: string,
    jobExperienceOrderIndex: number,
}

interface Education {
    education: string,
    educationProfileOrderIndex: number,
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
    educations: [{type: {education: String, educationProfileOrderIndex: Number,}, required: true}],
    jobs: [{type: {jobExperience: String, jobExperienceOrderIndex: Number}, required: true}],
});

const User = model<IUser>('User', userSchema);


export default User;
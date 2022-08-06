interface Education {
    education: string;
    orderNo: string;
}

interface Job {
    job: string;
    orderNo: string;
}

export interface updateUser {
    name: string;
    lastName: string;
    about: string;
    birthDate: string;
    homeCity: string;
    homeTown: string;
    educations?: Education[];
    jobs?: Job[];
}


export default function (body: updateUser): updateUser {
    return {
        name: body.name,
        lastName: body.lastName,
        about: body.about,
        birthDate: body.birthDate,
        homeCity: body.homeCity,
        homeTown: body.homeTown,
        educations: body.educations || [],
        jobs: body.jobs || [],
    };
}
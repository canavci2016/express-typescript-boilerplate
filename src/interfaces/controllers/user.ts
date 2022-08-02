export interface User {
    name: string;
    lastName: string;
    email: string;
    mobile: string;
    jobs: string[];
}

export interface UserWithToken extends User {
    token: string;
}

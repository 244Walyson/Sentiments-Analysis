export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    username: string;
    birthday: Date;
    gender: string;
    phoneNumber: string;
    instagramUrl: string;
    xUrl: string;
    imgUrl: string;
    bio: string;
    cpf: string;
    lastLogin: Date;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    constructor(props: Partial<User>);
}

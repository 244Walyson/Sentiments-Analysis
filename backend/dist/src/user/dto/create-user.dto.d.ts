export declare class CreateUserDto {
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
    constructor(props: {
        name?: string;
        email?: string;
        username?: string;
        password?: string;
        birthday?: Date;
        gender?: string;
        phoneNumber?: string;
        instagramUrl?: string;
        xUrl?: string;
        imgUrl?: string;
        bio?: string;
        cpf?: string;
    });
}

export declare class CreateUserDto {
    email: string;
    password: string;
    role: string;
    profile: {
        firstName: string;
        lastName: string;
        profilePicture?: string;
    };
}

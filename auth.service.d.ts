import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/user.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(email: string, password: string): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            role: any;
            profile: any;
        };
    }>;
}

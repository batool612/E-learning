import { AuthService } from './auth.service';
import { LoginDto } from './dto/LoginDto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            role: any;
            profile: any;
        };
    }>;
}

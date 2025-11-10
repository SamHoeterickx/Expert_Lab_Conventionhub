import { useMutation } from "@tanstack/react-query";

//Service
import { authService } from "../services";

interface LoginCredentials {
    email: string;
    password: string;
}

export const useLogin = () => {
    return useMutation({
        mutationFn: (credentials: LoginCredentials, redirectUri:string) => authService.login(credentials.email, credentials.password, redirectUri),
        
        onSuccess: (data) => {
            console.log('Login successful:', data);
        },
        onError: (error) => {
            console.log('Login error:', error);
        }
    });
};

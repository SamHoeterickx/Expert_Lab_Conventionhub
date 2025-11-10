import { useMutation } from "@tanstack/react-query"

//Service
import { authService } from "../services"

//Type
interface RegisterCredentials {
    email: string,
    password: string,
    repeatPassword: string,
    username: string
}

export const useRegister = () => {
    return useMutation({
        mutationFn: (credential:RegisterCredentials) => authService.register(credential.email, credential.username, credential.password, credential.repeatPassword),
        
        onSuccess: (data) => {
            console.log('Register successfull:', data);
        },
        onError: (error) => {
            console.log('Register error:', error);
        }
    })
}
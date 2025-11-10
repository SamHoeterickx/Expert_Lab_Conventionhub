import { useMutation } from "@tanstack/react-query"

//Service
import { authService } from "../services";

//Const
import { SHARED_MUTATE_KEYS } from "../const";

//Type
interface RegisterCredentials {
    email: string,
    password: string,
    repeatPassword: string,
    username: string
}

export const useRegister = () => {
    return useMutation({
        mutationKey: SHARED_MUTATE_KEYS.register,
        mutationFn: (credential:RegisterCredentials) => authService.register(credential.email, credential.username, credential.password, credential.repeatPassword),
        
        onSuccess: (data) => {
            console.log('Register successfull:', data);
        },
        onError: (error) => {
            console.log('Register error:', error);
        }
    })
}
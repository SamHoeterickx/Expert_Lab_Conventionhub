import { useMutation } from "@tanstack/react-query"

//Services
import { authService } from "../../services"
import { SHARED_MUTATE_KEYS } from "../../const"

//Type
interface UpdateUsernameProps {
    oldUsername: string,
    newUsername: string,
    email: string
}

export const useUpdateUsername = () => {
    return useMutation({
        mutationKey: SHARED_MUTATE_KEYS.updateUsername,
        mutationFn: ({ oldUsername, newUsername, email}: UpdateUsernameProps) => authService.updateUsername(oldUsername, newUsername, email),
        onSuccess: (data) => console.log(data.message, data),
        onError: (error) => console.log(error.message, error)
    });
}
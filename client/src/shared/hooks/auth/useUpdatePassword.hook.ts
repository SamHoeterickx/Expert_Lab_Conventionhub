import { useMutation } from "@tanstack/react-query"

//Service
import { authService } from "../../services"

//Const
import { SHARED_MUTATE_KEYS } from "../../const"

//Type
interface UpdatePasswordProps {
    oldPassword: string;
    newPassword: string;
    repeatNewPassword: string;
    email: string;
}

export const useUpdatePassword = () => {
    return useMutation({
        mutationKey: SHARED_MUTATE_KEYS.updatePassword,
        mutationFn: ({ oldPassword, newPassword, repeatNewPassword, email }: UpdatePasswordProps) => authService.updatePassword(oldPassword, newPassword, repeatNewPassword, email),
        onSuccess: (data) => console.log(data.message, data),
        onError: (error) => console.log(error.message, error)
    });
}
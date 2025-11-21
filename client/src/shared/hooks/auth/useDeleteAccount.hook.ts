import type { FormEvent } from "react"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

//Service
import { authService } from "../../services"

//Const
import { SHARED_MUTATE_KEYS } from "../../const"
import { ROUTES } from "../../const/routes.const"

export const useDeleteAccount = () => {

    const nav = useNavigate();

    return useMutation({
        mutationKey: SHARED_MUTATE_KEYS.deleteAccount,
        mutationFn: (e:FormEvent) => {
            e.preventDefault();
            return authService.deleteAccount()
        },
        onSuccess: (data) => {
            console.log('Account deleted successfull:', data)
            nav(ROUTES.HOME); 
            window.location.reload()
        },
        onError: (error) => console.log('Delete account error:', error)
    })
}
import { useMutation } from "@tanstack/react-query"

//Services
import { conventionService } from "../../services"

//Const
import { SHARED_MUTATE_KEYS } from "../../const"

//Type
import type { conventionFormData } from "../../types/ConventionForm.type"

export const useCreateConvention = () => {
    return useMutation({
        mutationKey: SHARED_MUTATE_KEYS.createConvention,
        mutationFn: (formData: conventionFormData) => conventionService.createnewConvention(formData),
            onSuccess: (data) => {
                console.log('Register successfull:', data);
            },
            onError: (error) => {
                console.log('Register error:', error);
            }
    })
}
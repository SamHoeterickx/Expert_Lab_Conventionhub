import { useQuery } from "@tanstack/react-query"

//Const
import { SHARED_QUERY_KEYS } from "../const"
import { conventionService } from "../services/conventions.service"

export const useGetConventions = () => {
    return useQuery({
        queryKey: SHARED_QUERY_KEYS.conventions,
        queryFn: conventionService.getAllConventions
    })
}
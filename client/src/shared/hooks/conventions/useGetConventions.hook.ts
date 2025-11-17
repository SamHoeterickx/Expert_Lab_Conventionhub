import { useQuery } from "@tanstack/react-query"

//Service
import { conventionService } from "../../services";

//Const
import { SHARED_QUERY_KEYS } from "../../const"

export const useGetConventions = () => {
    return useQuery({
        queryKey: SHARED_QUERY_KEYS.conventions,
        queryFn: conventionService.getAllConventions
    })
}
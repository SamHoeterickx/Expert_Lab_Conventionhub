import { useQuery } from "@tanstack/react-query"

//Service
import { conventionService } from "../../services"

//Const
import { SHARED_QUERY_KEYS } from "../../const"

export const useGetUsersConventions = () => {
    return useQuery({
        queryKey: SHARED_QUERY_KEYS.userConventions,
        queryFn: conventionService.getMyConventions
    });
}
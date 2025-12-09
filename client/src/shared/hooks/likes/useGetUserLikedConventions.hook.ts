import { useQuery } from "@tanstack/react-query"

//Service
import { likeConventionService } from "../../services"

//Const
import { SHARED_QUERY_KEYS } from "../../const"

export const useGetUserLikedConventions = () => {
    return useQuery({
        queryKey: SHARED_QUERY_KEYS.userLikedConventions,
        queryFn: likeConventionService.getMyLikedConventions
    })
}
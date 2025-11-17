import { useQuery } from "@tanstack/react-query";

//Service
import { likeConventionService } from "../../services";

//Const
import { SHARED_QUERY_KEYS } from "../../const";

export const useGetLikeStatus = (conventionId: string) => {
    return useQuery({
        queryKey: [...SHARED_QUERY_KEYS.likeStatus, conventionId],
        queryFn: () => likeConventionService.getLikeStatus(conventionId)
    })
};
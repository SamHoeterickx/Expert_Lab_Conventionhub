import { useQuery } from "@tanstack/react-query"

//Service
import { conventionService } from "../../services";

//Const
import { SHARED_QUERY_KEYS } from "../../const"

export const useGetSingleConvention = (slug: string | undefined) => {
    return useQuery({
        queryKey: [...SHARED_QUERY_KEYS.singleConvention, slug],
        queryFn: () => conventionService.getSingleConvention(slug),
        enabled: !!slug, 
    })
}
import { useQuery } from "@tanstack/react-query"

//Service
import { conventionService } from "../services/conventions.service"

//Const
import { SHARED_QUERY_KEYS } from "../const"

export const getConventionsPreview = (limit:number, random:boolean) => {
    return useQuery({
        queryKey: [...SHARED_QUERY_KEYS.conventionPreview, limit, random],
        queryFn: () => conventionService.getConventionPreview(limit, random),
    });
}
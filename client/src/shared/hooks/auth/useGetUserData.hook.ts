import { useQuery } from "@tanstack/react-query";

//Service
import { authService } from "../../services";

//Const
import { SHARED_QUERY_KEYS } from "../../const";

export const useGetUserData = () => {
    return useQuery({
        queryKey: SHARED_QUERY_KEYS.userData,
        queryFn: authService.getUserData
    });
}
import { useMutation } from "@tanstack/react-query"
import { SHARED_MUTATE_KEYS } from "../const";

//Services
import { likeConventionService } from "../services";

//Type
interface CredentialsProps {
    conventionId: string,
    likeState: boolean
}

export const useLikeConvention = () => {
    return useMutation({
        mutationKey: SHARED_MUTATE_KEYS.likeConvention,
        mutationFn: (credentials: CredentialsProps) => {
            if (!credentials.likeState) {
                return likeConventionService.likeConvention(credentials.conventionId);
            } else {
                return likeConventionService.removeLikeConvention(credentials.conventionId);
            }
        },
        onSuccess: (data) => {
            console.log('Like successfull:',data);
        },
        onError: (error) => {
            console.log('Like error:', error);
        }
    });
}
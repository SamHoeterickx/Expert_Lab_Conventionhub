import { useQuery } from '@tanstack/react-query';

//Service
import { authService } from '../../services';

interface User {
  id: string;
  email: string;
  username: string;
}

export const useAuth = () => {

    const {data: user, isLoading, isError, error} = useQuery<User, Error>({
        queryKey: ['user'], 
        queryFn: authService.authenticateMe,
        retry: false,
        staleTime: 10 * 60 * 1000, // 10 minutes
        refetchOnWindowFocus: true,
    });

    //user excists en there is no error
    //!! so it goes as a boolean
    const isAuthenticated = !!user && !isError;
    // console.log("user", user);

    return { user, isLoading, isError, error, isAuthenticated};
};
import type { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

//Hooks
import { useAuth } from '../../hooks'; 
import { LoadingScreen } from '../loadingScreen/LoadingScreen';

//Types
interface ProtectedRouteProps {
    children: ReactNode,
    redirect_path: string
}

export const ProtectedRoute:FC<ProtectedRouteProps> = ({ children, redirect_path }) => {
  
    const { isAuthenticated, isLoading } = useAuth(); 

    if (isLoading) {
        return <LoadingScreen />
    }

    
    if (!isAuthenticated) {
        return <Navigate to={redirect_path} replace />;
    }

    return children;
};
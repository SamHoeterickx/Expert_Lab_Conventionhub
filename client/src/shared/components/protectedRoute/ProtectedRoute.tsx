import type { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

//Hooks
import { useAuth } from '../../hooks'; 

//Types
interface ProtectedRouteProps {
    children: ReactNode,
    redirect_path: string
}

export const ProtectedRoute:FC<ProtectedRouteProps> = ({ children, redirect_path }) => {
  
    const { isAuthenticated, isLoading } = useAuth(); 

    if (isLoading) {
        return <div>Loading...</div>;
    }

    
    if (!isAuthenticated) {
        return <Navigate to={redirect_path} replace />;
    }

    return children;
};
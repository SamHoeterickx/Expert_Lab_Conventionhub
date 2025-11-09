import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

//Components
import { Header } from "../../shared/components";

//Routes

//Style
import './auth.css'

export const Auth = () => {

    const [authPageTitle, setAuthPageTitle] = useState<string | undefined>(undefined);
    const location = useLocation();

    useEffect(() => {
        const pathName = location.pathname;
        const pageparms = pathName.split('/auth/');
        setAuthPageTitle(pageparms[1]);
    }, [location])

    return(
        <div className="auth-wrapper">
            {
                authPageTitle &&            
                    <Header
                        title={ authPageTitle.toUpperCase() }
                    />
            }
            <div className="auth-corner-top-right-container">
                <div className="auth-corner-top-right"></div>
            </div>
            <div className="auth-container">
                <Outlet />
            </div>
        </div>
    )
}
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";

//Routes
import { HOME_ROUTE } from "../../../modules/home";

//Style
import './navigation.css';

export const Navigation = () => {

    const [isNotHome, setIsNotHome] = useState<boolean>(true);

    const location = useLocation();

    useEffect(() => {
        console.log(location);
        if(location.pathname === '/'){
            setIsNotHome(false);
        }

    }, [location])

    return(
        <nav>
            <div className={`nav-wrapper ${!isNotHome ? 'home' : ''}`}>
                {
                    isNotHome && isNotHome ? (
                        <Link 
                            to={`/${HOME_ROUTE.path}`}
                        >
                            CONVENTIONHUB
                        </Link>
                    ) : (<div className="blank-space"></div>)
                }
                <Link to={`/`}><img src="./" alt="" /></Link>
            </div>
        </nav>
    )
}
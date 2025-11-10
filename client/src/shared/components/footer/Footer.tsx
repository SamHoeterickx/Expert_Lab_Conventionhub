import { Link } from 'react-router-dom';

//Routes
import { CONTRIBUTE_ROUTE } from '../../../modules/contribute';
import { EXPLORE_ROUTE } from '../../../modules/explore';
import { HOME_ROUTE } from '../../../modules/home';

//Style
import './footer.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="left-wrapper">
                    <ul>
                        <li>
                            <Link to={`/${EXPLORE_ROUTE.path}`}>
                                <p>Explore Conventions</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/${CONTRIBUTE_ROUTE.path}`}>
                                <p>Create Conventions</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/${CONTRIBUTE_ROUTE.path}`}>
                                <p>Account</p>
                            </Link>
                        </li>
                        <li><p>
                                2025
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="right-wrapper">
                    <ul>
                        <li>
                            <Link to={"#"}>
                                <p>Cookiepolicy</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={"#"}>
                                <p>Privacypolicy</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/${HOME_ROUTE.path}`}> 
                                <h4>STANDARDSHUB</h4>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
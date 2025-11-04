//Style
import { Link } from 'react-router-dom';
import './footer.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="left-wrapper">
                    <ul>
                        <li>
                            <Link to={"#"}>
                                <p>Explore Conventions</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={"#"}>
                                <p>Create Conventions</p>
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
                            <Link to={"#"}> 
                                <h4>STANDARDSHUB</h4>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
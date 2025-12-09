import type { FC } from "react";
import { Link } from "react-router-dom";

// Components
import { Header, PreFooter, ScrollWrapper } from "../../../../shared/components";

//Hooks
import { useDocumentTitle } from "../../../../shared/hooks";

//Styles
import '../../policies.css'; 

// Routes
import { HOME_ROUTE } from "../../../home";


export const CookiePolicy: FC = () => {

    useDocumentTitle('ConventionHUB | CookiePolicy');
    
    return (
        <ScrollWrapper>
            <Header title="COOKIE POLICY" />
            
            <section className="policy-section">
                <div className="policy-top-right-corner-container">
                    <div className="policy-top-right-corner"></div>
                </div>
                <div className="policy-container">
                    <div className="policy-content">
                        <h3>1. Introduction</h3>
                        <p>
                            Welcome to ConventionHUB. This Cookie Policy explains how we use cookies and similar technologies 
                            to recognize you when you visit our website. It explains what these technologies are and why we use them, 
                            as well as your rights to control our use of them.
                        </p>

                        <h3>2. What are cookies?</h3>
                        <p>
                            Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                            Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
                            as well as to provide reporting information.
                        </p>

                        <h3>3. How we use cookies</h3>
                        <p>
                            We use cookies for a single, strictly necessary purpose: <strong>Authentication</strong>. 
                            We do not use cookies for advertising, tracking, or analytics.
                        </p>

                        <h3>4. Cookies we set</h3>
                        <div className="cookie-table-wrapper">
                            <table className="cookie-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Duration</th>
                                        <th>Purpose</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>session_id</strong></td>
                                        <td>Strictly Necessary / HttpOnly</td>
                                        <td>7 Days</td>
                                        <td>
                                            This cookie stores a secure, signed ID that identifies your logged-in session. 
                                            It allows you to remain logged in while navigating between pages, creating conventions, 
                                            and liking content without needing to re-enter your credentials on every page load.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>5. Why is this cookie "Strictly Necessary"?</h3>
                        <p>
                            The <code>session_id</code> cookie is essential for the website to function properly for registered users. 
                            Without this cookie, we cannot verify who you are, meaning you would not be able to post new conventions, 
                            manage your account, or interact with the community features.
                        </p>

                        <h3>6. How can I control cookies?</h3>
                        <p>
                            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls 
                            to accept or refuse cookies. If you choose to reject cookies, you may still use our website to browse and explore standards, 
                            but access to functionality such as contributing content, liking posts, or accessing your account will be restricted.
                        </p>

                        <h3>7. Updates to this policy</h3>
                        <p>
                            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use 
                            or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly 
                            to stay informed about our use of cookies and related technologies.
                        </p>
                        
                        <p className="last-updated"><strong>Last updated:</strong> November 2025</p>
                    </div>
                </div>
            </section>

            <PreFooter>
                <h2 dangerouslySetInnerHTML={{__html: "BACK TO <br> THE HUB"}}></h2>
                <Link className="large-button" to={`/${HOME_ROUTE.path}`}>
                    HOME
                </Link>
            </PreFooter>
        </ScrollWrapper>
    );
}
import type { FC } from "react";
import { Link } from "react-router-dom";

// Components
import { Header, PreFooter, ScrollWrapper } from "../../../../shared/components";

// Routes
import { HOME_ROUTE } from "../../../home";

//Style
import '../../policies.css'; 

export const PrivacyPolicy: FC = () => {
    return (
        <ScrollWrapper>
            <Header title="PRIVACY POLICY" />
            
            <section className="policy-section">
                <div className="policy-container">
                    <div className="policy-content">
                        <h3>1. Introduction</h3>
                        <p>
                            At ConventionHub, we value your privacy. This Privacy Policy outlines what personal data we collect, 
                            how we use it, and the choices you have regarding your information. By using our platform, 
                            you agree to the collection and use of information in accordance with this policy.
                        </p>

                        <h3>2. Information We Collect</h3>
                        <p>
                            To provide our services, we collect a limited amount of personal information:
                        </p>
                        <ul>
                            <li>
                                <strong>Account Information:</strong> When you register, we collect your <strong>username</strong> and <strong>email address</strong>. 
                                We also store a securely hashed version of your password.
                            </li>
                            <li>
                                <strong>User-Generated Content:</strong> Any conventions, descriptions, code snippets, or comments you contribute 
                                are stored in our database and are publicly visible to other users.
                            </li>
                            <li>
                                <strong>Usage Data:</strong> We track interactions such as "likes" on conventions to display popularity metrics.
                            </li>
                        </ul>

                        <h3>3. How We Use Your Data</h3>
                        <p>
                            We use your data strictly for the following purposes:
                        </p>
                        <ul>
                            <li><strong>Authentication:</strong> To verify your identity and keep you logged in securely.</li>
                            <li><strong>Attribution:</strong> To display your username alongside the conventions you create, giving you credit for your contributions.</li>
                            <li><strong>Platform Functionality:</strong> To allow you to create, edit, and delete your own conventions.</li>
                        </ul>

                        <h3>4. Data Security</h3>
                        <p>
                            We take security seriously. Your passwords are never stored in plain text; they are hashed using industry-standard encryption (Bcrypt) before being saved to our database. 
                            Your session is secured using HTTP-only cookies to prevent unauthorized access.
                        </p>

                        <h3>5. Sharing of Information</h3>
                        <p>
                            <strong>We do not sell, trade, or rent your personal identification information to others.</strong> 
                            Your data is used solely for the operation of ConventionHub. Conventions you publish are public by default and can be viewed, 
                            searched, and downloaded by anyone visiting the site.
                        </p>

                        <h3>6. Your Rights</h3>
                        <p>
                            You have full control over your data. You have the right to:
                        </p>
                        <ul>
                            <li><strong>Access:</strong> View the personal data associated with your profile.</li>
                            <li><strong>Rectification:</strong> Update your username or email address if they change.</li>
                            <li><strong>Erasure:</strong> Delete your account and all associated conventions permanently from our system.</li>
                        </ul>

                        <h3>7. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us via the platform's support channels.
                        </p>

                        <p className="last-updated"><strong>Last updated:</strong> November 2025</p>
                    </div>
                </div>
            </section>

            <PreFooter>
                <h2>BACK TO HUB</h2>
                <Link className="large-button" to={`/${HOME_ROUTE.path}`}>
                    HOME
                </Link>
            </PreFooter>
        </ScrollWrapper>
    );
}
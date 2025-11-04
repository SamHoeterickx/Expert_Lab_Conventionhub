import type { FC } from "react";

//Styles
import './home.css';
import { Button } from "../../../shared/components";

export const Home: FC = () => {
    return (
        <>
            <div>
                <section className="header-wrapper">
                    <div className="header-inner-wrapper">
                        
                        <h1 className="header-main-title">STANDARDSHUB</h1>
                        
                        <p className="header-lower-title">
                            Find, learn and apply best practices across all 
                            programming languages in one place
                        </p>

                    </div>
                </section>
                <section className="hero-section">
                    <div className="explore-section-wrapper">
                        <img className="hero-image" src="./images/" alt="image of convention detail page" />

                        <Button
                            copy={'Explore'}
                            primary={true}
                        />
                    </div>
                    <div className="contribute-section-wrapper">
                        <img className="hero-image" src="./images/" alt="image of convention md file" />

                        <Button
                            copy={'Contribute'}
                            primary={false}
                        />
                    </div>
                </section>
            </div>
        </>
    );
}
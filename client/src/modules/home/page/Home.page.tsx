import type { FC } from "react";

//Components
import { Button } from "../../../shared/components";
import { KPI } from "../components";

//Styles
import './home.css';

export const Home: FC = () => {
    return (
        <>
            <div>
                {/* HEADER */}
                <section className="header-wrapper">
                    <div className="header-inner-wrapper">
                        
                        <h1 className="header-main-title">STANDARDSHUB</h1>
                        
                        <p className="header-lower-title">
                            Find, learn and apply best practices across all 
                            programming languages in one place
                        </p>

                    </div>
                </section>

                {/* HERO */}
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

                {/* KPI */}
                <section className="kpi-section">
                    <div className="kpi-inner-wrapper">
                        <KPI
                            imgPath={"./"}
                            title={"Multi-Language Support"}
                            description={"JavaScript, React, CSS, Typescript, NodeJS, ... all in one hub"}
                        />
                        <KPI
                            imgPath={"./"}
                            title={"Easy to Understand"}
                            description={"Easy styling to improve readability for web or read the .md version"}
                        />
                        <KPI
                            imgPath={"./"}
                            title={"Easy to Reference"}
                            description={"Quick search, filters, and downloadable cheat sheets"}
                        />
                    </div>
                </section>
            </div>
        </>
    );
}
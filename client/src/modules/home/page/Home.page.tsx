import type { FC } from "react";

//Components
import { Button } from "../../../shared/components";
import { KPI } from "../components";

//Styles
import './home.css';
import { ConventionCard } from "../../../shared/components/conventionCard/ConventionCard";

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

                {/* POPULAR CONVENTIONS */}
                <section className="popular-conventions-section">
                    <div className="popular-conventions-inner-wrapper">
                        <h3>POPULAR CONVENTIONS</h3>
                        <div className="popular-conventions-container">
                            <ConventionCard
                                convention_title="JavaScript"
                                convention_description="Use camelCase for variable and function names"
                                convention_imgPath="./images/"
                            />
                            <ConventionCard
                                convention_title="JavaScript"
                                convention_description="Use camelCase for variable and function names"
                                convention_imgPath="./images/"
                            />
                            <ConventionCard
                                convention_title="JavaScript"
                                convention_description="Use camelCase for variable and function names"
                                convention_imgPath="./images/"
                            />
                        </div>
                        <div className="popular-convention-button-wrapper">
                            <Button
                                copy={ "View More" }
                                primary={ true }
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
import type { FC } from "react";

//Components
import { Button } from "../../../shared/components";
import { ConventionCard } from "../../../shared/components/conventionCard/ConventionCard";
import { KPI } from "../components";

//Styles
import './home.css';
import { Standards } from "../components/standards/Standards";

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
                    <div className="header-radius"></div>
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
                        <div className="kpi-container">
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
                    <div className="lower-corner-bg">
                        <div className="lower-corner-normal"></div>
                    </div>
                </section>

                {/* CONTRIBUTE */}
                <section className="contribute-section">
                    <div className="contribute-inner-wrapper">
                        <div className="contribute-container">
                            <h3>SHARE YOUR STANDARDS</h3>
                            <div className="standards-wrapper">
                                <Standards
                                    standards_number={ 1 }
                                    standards_title={ "Define and Write" }
                                    standards_description={ "Use our minimalist editor with full Markdown support to clearly document your conventions. No unnecessary bells and whistles, just focus on the content." }
                                />
                                <Standards
                                    standards_number={ 2 }
                                    standards_title={ "Tag and Categorize" }
                                    standards_description={ "Add the relevant languages, frameworks, and tools. Our smart tagging ensures the right developers can find your standard immediately." }
                                />
                                <Standards
                                    standards_number={ 3 }
                                    standards_title={ "Publish and Impact" }
                                    standards_description={ "Publish your standard and see the impact immediately. Every view and download contributes to your reputation in the community." }
                                />
                            </div>
                            <div className="standards-button-wrapper">
                                <Button
                                    copy={"Start Contributing"}
                                    primary={ false }
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
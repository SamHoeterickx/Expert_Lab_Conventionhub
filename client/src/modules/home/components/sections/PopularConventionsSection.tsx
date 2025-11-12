//Components
import { Button, ConventionCard } from "../../../../shared/components";

//Routes
import { EXPLORE_ROUTE } from "../../../explore";

export const PopularConventionsSection = () => {
    return (
        <section className="popular-conventions-section">
            <div className="popular-conventions-inner-wrapper">
                <h3>POPULAR CONVENTIONS</h3>
                <div className="popular-conventions-container">
                    <ConventionCard
                        convention_title="JavaScript"
                        convention_description="Use camelCase for variable and function names"
                        convention_link="test"
                    />
                    <ConventionCard
                        convention_title="JavaScript"
                        convention_description="Use camelCase for variable and function names"
                        convention_link="test"
                    />
                    <ConventionCard
                        convention_title="JavaScript"
                        convention_description="Use camelCase for variable and function names"
                        convention_link="test"  
                    />
                </div>
                <div className="popular-convention-button-wrapper">
                    <Button
                        copy={ "View More" }
                        link={ EXPLORE_ROUTE.path }
                        primary={ true }
                    />
                </div>
            </div>
            <div className="lower-corner-bg">
                <div className="lower-corner-normal"></div>
            </div>
        </section>
    )
}
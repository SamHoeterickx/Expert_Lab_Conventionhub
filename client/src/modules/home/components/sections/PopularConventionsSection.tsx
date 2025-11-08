//Components
import { Button, ConventionCard } from "../../../../shared/components";

export const PopularConventionsSection = () => {
    return (
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
    )
}
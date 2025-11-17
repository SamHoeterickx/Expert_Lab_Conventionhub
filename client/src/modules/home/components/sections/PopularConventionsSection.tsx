//Components
import { Button, ConventionCard } from "../../../../shared/components";

//Hooks
import { getConventionsPreview } from "../../../../shared/hooks/index";

//Routes
import { EXPLORE_ROUTE } from "../../../explore";

export const PopularConventionsSection = () => {

    const {data, isLoading } = getConventionsPreview(3, true);

    return (
        <section className="popular-conventions-section">
            <div className="popular-conventions-inner-wrapper">
                <h3>POPULAR CONVENTIONS</h3>
                <div className="popular-conventions-container">
                    {
                        isLoading && <h4>Loading...</h4>
                    }
                    {
                        data && data.data && data.data.map(convention => (
                            <ConventionCard
                                convention_title={ convention.title }
                                convention_description={ convention.description }
                                convention_link={convention.slug}
                            />
                        ))
                    }
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
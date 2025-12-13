//Components
import { Button } from "../../../../shared/components";

//Routes
import { CONTRIBUTE_ROUTE } from "../../../contribute";
import { EXPLORE_ROUTE } from "../../../explore";

export const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="explore-section-wrapper">
                <img className="hero-image" src="images/md.png" alt="image of convention detail page" />

                <Button
                    copy={ 'Explore' }
                    link={ EXPLORE_ROUTE.path }
                    primary={ true }
                />
            </div>
            <div className="contribute-section-wrapper">
                <img className="hero-image" src="images/preview.png" alt="image of convention md file" />

                <Button
                    copy={ 'Contribute' }
                    link={ CONTRIBUTE_ROUTE.path }
                    primary={ false }
                />
            </div>
        </section>
    )
}
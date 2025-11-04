//Components
import { Button } from "../../../../shared/components";

export const HeroSection = () => {
    return (
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
    )
}
import type { FC } from "react";

//Components
import { ScrollWrapper } from "../../../shared/components";
import { 
    ContributeSection, 
    HeaderSection,
    HeroSection,
    KpiSection, 
    PopularConventionsSection, 
    SloganSection,
} from "../components";

//Styles
import './home.css';

export const Home: FC = () => {
    return (
        <ScrollWrapper>
            <HeaderSection />
            <HeroSection />
            <KpiSection />
            <PopularConventionsSection />
            <ContributeSection />
            <SloganSection />
        </ScrollWrapper>
    );
}
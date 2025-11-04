import type { FC } from "react";

//Components
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
        <>
            <HeaderSection />
            <HeroSection />
            <KpiSection />
            <PopularConventionsSection />
            <ContributeSection />
            <SloganSection />
        </>
    );
}
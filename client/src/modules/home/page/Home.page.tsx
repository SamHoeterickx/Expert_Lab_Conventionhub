import { type FC } from "react";

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

//Hooks
import { useDocumentTitle } from "../../../shared/hooks";

//Styles
import './home.css';

export const Home: FC = () => {

    useDocumentTitle('ConventionHUB | Home');

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
import { type FC } from "react";

//Components
import { Header, PreFooter, ScrollWrapper } from "../../../shared/components";
import { CreateConventionForm } from "../components/CreateConventionForm";

//Style
import './contribute.css';

export const Contribute: FC = () => {

    return(
        <ScrollWrapper>
            <Header
                title={ "CONTRIBUTE" }
            />
            <div className="contribute-corner-top-right-container">
                <div className="contribute-corner-top-right"></div>
            </div>
            <CreateConventionForm />
            <PreFooter>
                <h2></h2>
            </PreFooter>
            
        </ScrollWrapper>
    )
}
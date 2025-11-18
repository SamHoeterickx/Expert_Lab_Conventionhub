import { type FC } from "react";

//Components
import { Header, PreFooter, ScrollWrapper } from "../../../shared/components";
import { CreateConventionForm } from "../components/CreateConventionForm";

//Style
import './contribute.css';
import { Link } from "react-router-dom";
import { EXPLORE_ROUTE } from "../../explore";

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
                <h2 dangerouslySetInnerHTML={{ __html: 'EXPLORE <br>CONVENTIONS'}}></h2>
                <Link
                    className="large-button"
                    to={ `/${EXPLORE_ROUTE.path}`}
                >EXPLORE</Link>
            </PreFooter>
            
        </ScrollWrapper>
    )
}
import { type FC } from "react";
import { Link } from "react-router-dom";

//Components
import { Header, PreFooter, ScrollWrapper } from "../../../shared/components";
import { CreateConventionForm } from "../components/CreateConventionForm";

//Hooks
import { useDocumentTitle } from "../../../shared/hooks";

//Style
import './contribute.css';

//Routes
import { EXPLORE_ROUTE } from "../../explore";

export const Contribute: FC = () => {

    useDocumentTitle('ConventionHUB | Contribute');

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
                <h2 dangerouslySetInnerHTML={{ __html: 'EXPLORE <br>STANDARDS'}}></h2>
                <Link
                    className="large-button"
                    to={ `/${EXPLORE_ROUTE.path}`}
                >EXPLORE</Link>
            </PreFooter>
            
        </ScrollWrapper>
    )
}
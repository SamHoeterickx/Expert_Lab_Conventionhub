import { type FC } from "react";
import { Link } from "react-router-dom";

//Style
import './conventionCard.css';

//Type
interface ConventionCardProps {
    convention_title: string,
    convention_description: string,
    convention_link: string
}

export const ConventionCard: FC<ConventionCardProps> = ({ convention_title, convention_description, convention_link }) => {

    return(
        <div className="convention-card-wrapper">
            <div className="convention-card-top-info">
                <h2>{ convention_title }</h2>
            </div>
            <h4>{ convention_description }</h4>
            <Link to={`/convention/${convention_link}`}>
                <div className="large-button">View</div>
            </Link>
        </div>
    )
}
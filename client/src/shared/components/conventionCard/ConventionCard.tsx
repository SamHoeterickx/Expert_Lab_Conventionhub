import { useRef, type FC } from "react";

//Style
import './conventionCard.css';

//Type
interface ConventionCardProps {
    convention_title: string,
    convention_description: string,
    convention_imgPath: string
}

export const ConventionCard: FC<ConventionCardProps> = ({ convention_title, convention_imgPath, convention_description}) => {

    const ref = useRef()

    return(
        <div className="convention-card-wrapper">
            <div className="convention-card-top-info">
                <h2>{ convention_title }</h2>
                <img src={ convention_imgPath } alt="" />
            </div>
            <h4>{ convention_description }</h4>
            <button className="view-button">View</button>
        </div>
    )
}
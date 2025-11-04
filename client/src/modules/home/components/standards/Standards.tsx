import type { FC } from "react";

//Style
import './standards.css';

//Type
interface StandardsProps {
    standards_number: number,
    standards_title: string,
    standards_description: string,
}

export const Standards: FC<StandardsProps> = ({standards_number, standards_title, standards_description}) => {
    return (
        <div className="standards-item-wrapper">
            <div className="standards-top-wrapper">
                <h2>{ `0${standards_number}` }</h2>
                <h4>{ standards_title }</h4>
            </div>
            <p>
                { standards_description }
            </p>
        </div>
    )
}
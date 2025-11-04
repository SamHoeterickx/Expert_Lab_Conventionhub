import type { FC } from "react";

//Style
import './kpi.css';

//Type
interface KPIProps{
    title: string;
    description: string;
    imgPath: string;
};

export const KPI: FC<KPIProps> = ({ title, description, imgPath}) => {
    return(
        <div className="kpi-wrapper">
            <div className="kpi-image-wrapper">
                <img className="kpi-image" src={imgPath} />
            </div>
            <div className="kpi-info-wrapper">
                <h2>{ title }</h2>
                <h4>{ description }</h4>
            </div>
        </div>
    )
}
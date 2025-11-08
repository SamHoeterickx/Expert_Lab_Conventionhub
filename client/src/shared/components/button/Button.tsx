import type { FC } from "react";
import { Link } from "react-router-dom";

//Style
import './button.css';

//Type
interface ButtonProps {
    copy: string;
    link: string
    primary: boolean;
};

export const Button: FC<ButtonProps> = ({ copy, link, primary }) => {
    return (
        <Link to={`/${link}`}>
            <div
                className={`button ${primary ? 'primary' : 'secondary'}`}
            >
                {copy}
            </div>
        </Link>
    );
};
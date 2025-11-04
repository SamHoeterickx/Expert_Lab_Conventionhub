import type { FC } from "react";
import { Link } from "react-router-dom";

//Style
import './button.css';

//Type
interface ButtonProps {
    copy: string;
    primary: boolean;
};

export const Button: FC<ButtonProps> = ({ copy, primary }) => {
    return (
        <Link to={"#"}>
            <div
                className={`button ${primary ? 'primary' : 'secondary'}`}
            >
                {copy}
            </div>
        </Link>
    );
};
import type { FC } from "react";

//Style
import './button.css';

//Type
interface ButtonType {
    copy: string;
    primary: boolean;
};

export const Button: FC<ButtonType> = ({ copy, primary }) => {
    return (
        <button
            className={`button ${primary ? 'primary' : 'secondary'}`}
        >
            {copy}
        </button>
    );
};
import type { FC } from "react";

//Style
import './button.css';

//Type
interface ButtonProps {
    copy: string;
    primary: boolean;
};

export const Button: FC<ButtonProps> = ({ copy, primary }) => {
    return (
        <button
            className={`button ${primary ? 'primary' : 'secondary'}`}
        >
            {copy}
        </button>
    );
};
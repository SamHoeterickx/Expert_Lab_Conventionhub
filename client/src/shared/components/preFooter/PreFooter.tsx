import type { FC, ReactNode } from "react";

//Style
import './preFooter.css';

//Type
interface PreFooterProps {
    children: ReactNode | ReactNode[]
}

export const PreFooter: FC<PreFooterProps> = ({ children }) => {
    return(
        <section className="pre-footer-section">
            <div className="pre-footer-upper-corner"></div>
            <div className="pre-footer-wrapper">
                <div className="pre-footer-container">
                    { children }
                </div>
            </div>
        </section>
    )
}
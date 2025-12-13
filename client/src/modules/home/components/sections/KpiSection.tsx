//Components
import { KPI } from "../kpi/Kpi";

export const KpiSection = () => {
    return(
        <section className="kpi-section">
            <div className="kpi-corner-upper"></div>    
            <div className="kpi-inner-wrapper">
                <div className="kpi-container">
                    <KPI
                        imgPath={"icons/code.png"}
                        title={"Multi-Language Support"}
                        description={"JavaScript, React, CSS, Typescript, NodeJS, ... all in one hub"}
                    />
                    <KPI
                        imgPath={"icons/idea.png"}
                        title={"Easy to Understand"}
                        description={"Easy styling to improve readability for web or read the .md version"}
                    />
                    <KPI
                        imgPath={"icons/link.png"}
                        title={"Easy to Reference"}
                        description={"Quick search, filters, and downloadable cheat sheets"}
                    />
                </div>
            </div>
        </section>
    )
}
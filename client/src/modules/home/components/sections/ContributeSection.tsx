//Components
import { Standards } from "../standards/Standards";
import { Button } from "../../../../shared/components";

export const ContributeSection = () => {
    return (
        <section className="contribute-section">
            <div className="contribute-inner-wrapper">
                <div className="contribute-container">
                    <h3>SHARE YOUR STANDARDS</h3>
                    <div className="standards-wrapper">
                        <Standards
                            standards_number={ 1 }
                            standards_title={ "Define and Write" }
                            standards_description={ "Use our minimalist editor with full Markdown support to clearly document your conventions. No unnecessary bells and whistles, just focus on the content." }
                        />
                        <Standards
                            standards_number={ 2 }
                            standards_title={ "Tag and Categorize" }
                            standards_description={ "Add the relevant languages, frameworks, and tools. Our smart tagging ensures the right developers can find your standard immediately." }
                        />
                        <Standards
                            standards_number={ 3 }
                            standards_title={ "Publish and Impact" }
                            standards_description={ "Publish your standard and see the impact immediately. Every view and download contributes to your reputation in the community." }
                        />
                    </div>
                    <div className="standards-button-wrapper">
                        <Button
                            copy={"Start Contributing"}
                            primary={ false }
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
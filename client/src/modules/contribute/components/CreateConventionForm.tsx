import { useState } from "react"

//Components
import { StepFourContentMd, StepOneTitle, StepThreeDescription, StepTwoCategory } from "./StepComponents";

//Hooks
import { useCreateConvention } from "../../../shared/hooks";

//Types
import type { conventionFormData } from "../../../shared/types/ConventionForm.type";

export const CreateConventionForm = () => {

    const [step, setStep] = useState<number>(1);
    const [formData, setFormData] = useState<conventionFormData>({
        title: '',
        category: '',
        description: '',
        contentMd: ''
    });

    const { mutate, isPending } = useCreateConvention();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNextStep = () => setStep(prev => Math.min(prev + 1, 5));
    const handlePrevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = () => {
        console.log('Form submition successfull', formData);
        mutate(formData);
    };

    const renderStepContent = () => {
        switch(step){
            case 1: return <StepOneTitle formData={ formData } handleChange={ handleChange } />
            case 2: return <StepTwoCategory formData={ formData } handleChange={ handleChange } />
            case 3: return <StepThreeDescription formData={ formData } handleChange={ handleChange } />
            case 4: return <StepFourContentMd formData={ formData } handleChange={ handleChange } />
            default: return null
        }
    }
 
    return(
        <div className="form-wrapper">
            <div className="form-inner-wrapper">
                <form>
                    { renderStepContent() }

                    {/* Navigation Buttons */}
                    <div className="navigation-button-wrapper">
                        <button
                            className="button"
                            type="button"
                            onClick={ handlePrevStep }
                            disabled={ step === 1 }
                        >
                            Back
                        </button>

                        {
                            step < 4 ? (
                                <button
                                    className="button"
                                    type="button"
                                    onClick={ handleNextStep }
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    className="button"
                                    type="button"
                                    onClick={ handleSubmit }
                                    disabled={ isPending }
                                >
                                    {
                                        isPending ? 'Saving...' : 'Save'
                                    }
                                </button>
                            )
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}
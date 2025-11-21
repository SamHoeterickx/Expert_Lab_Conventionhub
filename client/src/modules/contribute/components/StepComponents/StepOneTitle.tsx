import type { FC } from "react"

//Type
import type { StepsProps } from "../../../../shared/types/Steps.type";

export const StepOneTitle:FC<StepsProps> = ({ formData, handleChange }) => {
    return (
        <div className="form-input-wrapper basic">
            <h2>TITLE</h2>
            <input 
                className="contribute-text-field"
                type="text" 
                name="title" 
                id="title"
                value={ formData.title}
                onChange={ handleChange }
                placeholder="Javascript"
            />
        </div>
    )
}
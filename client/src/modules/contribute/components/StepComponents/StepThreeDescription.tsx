import type { FC } from "react"

//Type
import type { StepsProps } from "../../../../shared/types/Steps.type";

export const StepThreeDescription:FC<StepsProps> = ({ formData, handleChange }) => {
    return (
        <div className="form-input-wrapper">
            <h2>DESCRIPTION</h2>
            <input 
                type="text" 
                name="description" 
                id="description"
                value={ formData.description}
                onChange={ handleChange }
                placeholder="Short description max 50 characters long"
                maxLength={50}
            />
            <p className="lower-text">Max 50 characters long</p>
        </div>
    )
}
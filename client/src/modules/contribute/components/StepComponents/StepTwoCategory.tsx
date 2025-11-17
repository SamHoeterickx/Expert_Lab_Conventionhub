import type { FC } from "react"

//Type
import type { StepsProps } from "../../../../shared/types/Steps.type";

export const StepTwoCategory:FC<StepsProps> = ({ formData, handleChange }) => {
    return (
        <div className="form-input-wrapper">
            <h2>CATEGORY</h2>
            <div className="category-wrapper">
                <div className="category-radio-wrapper">                
                    <input 
                        type="radio" 
                        name="category" 
                        value="frontend" 
                        id="frontend" 
                        onChange={ handleChange}
                        checked={ formData.category === "frontend"}
                    />
                    <label htmlFor="frontend">FRONTEND</label>
                </div>
                <div className="category-radio-wrapper">                
                    <input 
                        type="radio" 
                        name="category" 
                        value="backend" 
                        id="backend" 
                        onChange={ handleChange}
                        checked={ formData.category === "backend"}
                    />
                    <label htmlFor="frontend">BACKEND</label>
                </div>
                <div className="category-radio-wrapper">                
                    <input 
                        type="radio" 
                        name="category" 
                        value="database" 
                        id="database" 
                        onChange={ handleChange}
                        checked={ formData.category === "database"}
                    />
                    <label htmlFor="frontend">DATABASE</label>
                </div>
                <div className="category-radio-wrapper">                
                    <input 
                        type="radio" 
                        name="category" 
                        value="open source"
                        id="opensource" 
                        onChange={ handleChange}
                        checked={ formData.category === "open source"}
                    />
                    <label htmlFor="frontend">OPEN SOURCE</label>
                </div>
            </div>
        </div>
    )
}
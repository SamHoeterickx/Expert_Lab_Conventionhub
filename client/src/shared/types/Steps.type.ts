import type { ChangeEvent } from "react";
import type { conventionFormData } from "./ConventionForm.type";

export interface StepsProps {
    formData: conventionFormData,
    handleChange: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => void;
}
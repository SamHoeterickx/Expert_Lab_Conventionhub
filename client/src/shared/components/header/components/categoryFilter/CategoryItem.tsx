import type { FC } from "react";

//Type
interface CategoryItemProps {
    name: string
}

export const CategoryItem:FC<CategoryItemProps> = ({ name }) => {
    return(
        <button className="category-item">
            { name }
        </button>
    )
}
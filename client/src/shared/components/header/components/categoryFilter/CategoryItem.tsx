import type { FC } from "react";
import { useSearchParams } from "react-router-dom";

//Type
interface CategoryItemProps {
    name: string
}

export const CategoryItem:FC<CategoryItemProps> = ({ name }) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = () => {
        console.log(name);

        setSearchParams(prevParms => {
            prevParms.set('cf', name.toLowerCase());

            return prevParms
        })

    }

    return(
        <button 
            className="category-item"
            onClick={ handleClick }
        >
            { name.toUpperCase() }
        </button>
    )
}
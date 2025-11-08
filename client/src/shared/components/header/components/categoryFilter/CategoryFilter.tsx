import type { FC } from 'react';

//Components
import { CategoryItem } from './CategoryItem';

//Style
import './categoryFilter.css';

//Dummydata
const categories = ["Javascript", "TypeScript", "CSS", "React", "PHP"]

export const CategoryFilter:FC = () => {
    return(
        <div className="category-wrapper">
            {
                categories.map(item => (
                    <CategoryItem 
                        name={ item }
                    />
                ))
            }
        </div>
    )
}
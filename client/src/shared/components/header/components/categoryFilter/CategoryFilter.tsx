import type { FC } from 'react';

//Components
import { CategoryItem } from './CategoryItem';

//Style
import './categoryFilter.css';

//Dummydata
const categories = ["All", "frontend", "backend", "database", "open source"];

export const CategoryFilter:FC = () => {
    return(
        <div className="category-wrapper">
            {
                categories.map(item => (
                    <CategoryItem 
                        key={item}
                        name={ item }
                    />
                ))
            }
        </div>
    )
}
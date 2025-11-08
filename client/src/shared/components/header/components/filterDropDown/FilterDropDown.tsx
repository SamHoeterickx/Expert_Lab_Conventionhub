import type { FC } from "react";

//Components
import { SearchBar } from "../searchbar/SearchBar";

//Style
import './filterDropDown.css';
import { CategoryFilter } from "../categoryFilter/CategoryFilter";

export const FilterDropDown: FC = () => {
    return(
        <div className="filter-dropdown-wrapper">
            <SearchBar />
            <CategoryFilter />
        </div>
    )
}
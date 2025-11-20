import type { FC } from "react";

//Components
import { CategoryFilter } from "../categoryFilter/CategoryFilter";
import { SearchBar } from "../searchbar/SearchBar";

//Style
import './filterDropDown.css';

export const FilterDropDown: FC = () => {
    return(
        <div className="filter-dropdown-wrapper">
            <SearchBar />
            <CategoryFilter />
        </div>
    )
}
import type { FC } from "react";

//Components
import { SearchBar } from "../searchbar/SearchBar";

//Style
import './filterDropDown.css';

export const FilterDropDown: FC = () => {
    return(
        <div className="filter-dropdown-wrapper">
            <SearchBar />
        </div>
    )
}
import type { FC } from "react";
import { useSearchParams } from "react-router-dom";

//Hooks
import { useUpdateSearchParams } from "../../../../hooks/useUpdateSearchParams";

//Style
import './searchBar.css';

export const SearchBar: FC = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const { updateSearchParam } = useUpdateSearchParams();

    const handleSearch = (e) => {
        const searchValue = e.target.value;

        setSearchParams(currentParams => {
            let updatedParams = updateSearchParam(
                currentParams, 
                's', 
                searchValue
            );
            
            // Example of setting another, static parameter
            updatedParams.set('s', 'default-search-term');

            return updatedParams;
        });
    }

    return(
        <div className="searchbar-wrapper">
            <div className="searchbar-inner-wrapper">
                <input
                    type="search" 
                    name="searchbar" 
                    id="searchbar" 
                />
                <button
                    onClick={ handleSearch }
                >
                    🔍
                </button>
            </div>
        </div>
    )
}
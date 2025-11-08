import { useState, type FC, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

//Style
import './searchBar.css';

export const SearchBar: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState<string>(searchParams.get('s') || "");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSearchSubmit = (e: FormEvent) => {
        e.preventDefault(); 

        setSearchParams(prevParams => {
            if (inputValue.trim() !== "") {
                prevParams.set('s', inputValue);
            } else {
                prevParams.delete('s');
            }

            prevParams.set('fs', 'true'); 
            return prevParams;
        });
    };

    return (
        <form className="searchbar-wrapper" onSubmit={ handleSearchSubmit }>
            <div className="searchbar-inner-wrapper">
                <input
                    type="search" 
                    name="searchbar" 
                    id="searchbar" 
                    placeholder="Search..."
                    value={ inputValue } 
                    onChange={ handleInputChange }
                />
                <button
                    type="submit" 
                    aria-label="Search"
                >
                    🔍
                </button>
            </div>
        </form>
    );
}
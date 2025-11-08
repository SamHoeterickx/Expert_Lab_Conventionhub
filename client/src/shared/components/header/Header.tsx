import { useEffect, useState, type FC } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

//Components
import { FilterDropDown } from "./components/filterDropDown/FilterDropDown";

//Style
import './header.css'

//Type
interface HeaderProps {
    title: string
}

export const Header: FC<HeaderProps> = ({ title }) => {

    const [currentPage, setCurrentPage] = useState<string | undefined>(undefined);
    const [isFilterState, setIsFilterState] = useState<boolean>(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation();

    useEffect(() => {
        const pathName = location.pathname;
        const pageParam = pathName.split('/');
        const fsParam = searchParams.get('fs');

        setCurrentPage(pageParam[1]);

        if(fsParam === 'true'){
            setIsFilterState(true);
        }else {
            setIsFilterState(false);
        }

    }, [location]);

    const handleFilterDropdown = () => {
        const filterState = !isFilterState;
        
        setIsFilterState(!isFilterState);
        setSearchParams(prevParams => {
            prevParams.set('fs', filterState.toString());
            return prevParams;
        });
    }

    return (
        <div className="header-component-wrapper">
            <div className="header-component-inner-wrapper">
                <h2>{ title }</h2>
                {
                    currentPage === "explore" && (
                        <button
                            className="filter-drop-down"
                            onClick={ handleFilterDropdown }
                        >
                            🔍
                        </button>
                    )
                }
                {
                    isFilterState && <FilterDropDown />
                }
            </div>
        </div>
    )
}
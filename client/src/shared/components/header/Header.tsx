import { useEffect, useState, type FC } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";

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
    const nav = useNavigate();

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

    const handleNavigateBack = (e:any) => {
        e.preventDefault();
        nav(-1)
    }

    return (
        <div className="header-component-wrapper">
            <div className="header-component-inner-wrapper">
               <div className="header-component-back"> 
                    <Link 
                        to={'...'} 
                        onClick={handleNavigateBack}
                    >
                        {'< BACK'}
                    </Link>
                </div>
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
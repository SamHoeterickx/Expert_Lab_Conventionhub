import { useEffect, useState, type FC } from "react"
import { Link, useSearchParams } from "react-router-dom";

//Components
import { Header, ConventionCard, PreFooter, ScrollWrapper, LoadingScreen } from "../../../shared/components";

//Hooks
import { useDocumentTitle, useGetConventions } from "../../../shared/hooks";

//Types
import type { ConventionType } from "../../../shared/types/Convention.type";

//Routes
import { CONTRIBUTE_ROUTE } from "../../contribute";

//Style
import './explore.css';

export const Explore: FC = () => {

    const [filteredData, setFilteredData] = useState<ConventionType[]>([]);

    const {data, isLoading, isError, error} = useGetConventions();
    const [searchParams] = useSearchParams();

    useDocumentTitle('StandardsHUB | Explore');

    useEffect(() => {
        if(data && data.data){
            const allConventions:ConventionType[] = data.data;
            const category = searchParams.get('cf');
            const search = searchParams.get('s');

            let filteredConventions:ConventionType[] = allConventions;
            
            if(category){
                if(category === "all"){
                    filteredConventions = allConventions;
                }else{
                    filteredConventions = allConventions.filter(convention => convention.category.toLowerCase() === category);
                }
            }

            if(search){
                filteredConventions = allConventions.filter(convention => convention.title.toLowerCase().includes(search));
            }
            console.log(filteredConventions);
            setFilteredData(filteredConventions);
        }else{
            setFilteredData([])
        }
    }, [data, searchParams])

    return(
        <ScrollWrapper>
            <Header 
                title={ "EXPLORE" }
            />
            <section className="explore-section">
                <div className="explore-corner-upper"></div>
                <div className="explore-convention-wrapper">
                    {
                        isLoading && <LoadingScreen />
                    }
                    {
                        isError && <h2>{error.message}</h2>
                    }
                    { 
                        filteredData.map(convention => (
                            <ConventionCard
                                key={ convention.id }
                                convention_title={ convention.title }
                                convention_description={ convention.description }
                                convention_link={ convention.slug }
                            />
                        ))
                    } 
                </div>
            </section>
            <PreFooter>
                <h2>SHARE YOUR STANDARDS</h2>
                <Link 
                    className="large-button"
                    to={ `/${CONTRIBUTE_ROUTE.path}` }
                >
                    CONTRIBUTE
                </Link>
            </PreFooter>
        </ScrollWrapper>
    )
}
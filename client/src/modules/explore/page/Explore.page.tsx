import { useEffect, type FC } from "react"
import { Link } from "react-router-dom";

//Components
import { Header, ConventionCard, PreFooter, ScrollWrapper } from "../../../shared/components";

//Hooks
import { useGetConventions } from "../../../shared/hooks/useGetConventions.hook";

//Routes
import { CONTRIBUTE_ROUTE } from "../../contribute";

//Style
import './explore.css';

export const Explore: FC = () => {

    const {data, isLoading, isError, error} = useGetConventions();

    return(
        <ScrollWrapper>
            <Header 
                title={ "EXPLORE" }
            />
            <section className="explore-section">
                <div className="explore-corner-upper"></div>
                <div className="explore-convention-wrapper">
                    {
                        isLoading && <h2>Loading...</h2>
                    }
                    {
                        isError && <h2>{error.message}</h2>
                    }
                    { 
                        data && data.data.map(convention => (
                            <ConventionCard
                                key={ convention.id }
                                convention_title={ convention.title }
                                convention_description={ convention.description }
                                convention_imgPath="./"
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
                    Contribute
                </Link>
            </PreFooter>
        </ScrollWrapper>
    )
}
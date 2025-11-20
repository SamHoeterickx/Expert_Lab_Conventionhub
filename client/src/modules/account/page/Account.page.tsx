import { useEffect, type FC } from "react";

//Components
import { ConventionCard, Header, PreFooter } from "../../../shared/components";

//Hooks
import { useDocumentTitle, useGetUserData, useGetUserLikedConventions, useGetUsersConventions } from "../../../shared/hooks";

//Type
import type { ConventionType } from "../../../shared/types/Convention.type";

//Style
import './account.css';

export const Account:FC = () => {

    useDocumentTitle('StandardsHUB | Account');
    const { data:userData, isLoading, isError, error } = useGetUserData(); 
    const { data:conventionData, isLoading:isConventionLoading, isError:isConventionError, error:conventionError } = useGetUsersConventions(); 
    const { data:likedData, isLoading:isLikeLoading, isError:isLikeError, error:likeError } = useGetUserLikedConventions(); 

    useEffect(() => {
        console.log(userData);
        console.log(likedData);
    }, [userData, likedData]);


    return (
        <>
            <Header
                title="Account"
            />
            <div className="account-top-right-corner-container">
                <div className="account-top-right-corner"></div>
            </div>
            
            {
                userData && userData.data && likedData && likedData.data && conventionData && conventionData.data && 
                    <section className="account-userdata-wrapper">
                        <div className="account-top-info-wrapper">
                            <h1> { userData.data.username.toUpperCase() }</h1>
                            <h4> { userData.data.email.toUpperCase() }</h4>
                        </div>

                        <div className="account-my-conventions-container">
                            <h2>MY STANDARDS</h2>
                            <div className="account-my-conventions-wrapper">
                                {
                                    conventionData.data.length !== 0 ? (
                                        conventionData.data.map((convention:ConventionType) => (
                                            <ConventionCard
                                                convention_title={ convention.title }
                                                convention_description={ convention.description }
                                                convention_link={ convention.slug}
                                            />
                                        ))
                                    ) : (
                                        <h4>No contributes yet</h4>
                                    )
                                }
                               
                            </div> 
                        </div>
                        <div className="account-my-conventions-container">
                            <h2>MY LIKED STANDARDS</h2>
                            <div className="account-my-conventions-wrapper">
                                {
                                    likedData.data.length !== 0 ? (
                                        likedData.data.map((convention:any) => (
                                            <ConventionCard
                                                convention_title={ convention.convention.title }
                                                convention_description={ convention.convention.description }
                                                convention_link={ convention.convention.slug}
                                            />
                                        ))
                                    ) : (
                                        <h4>No liked conventions yet</h4>
                                    )
                                }
                            </div>
                        </div>
                    </section>
            }

            <PreFooter>
                <div className="account-action-wrapper">

                </div>
            </PreFooter>
        </>
    )
}
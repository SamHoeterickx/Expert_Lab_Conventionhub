import { useEffect, useState, type FC } from "react";

//Components
import { Button, ConventionCard, Header, PreFooter } from "../../../shared/components";

//Modals
import { ChangePasswordModal, ChangeUsernameModal, DeleteAccountModal } from "../../../shared/utils/modals";

//Service
import { authService } from "../../../shared/services";

//Hooks
import { useDocumentTitle, useGetUserData, useGetUserLikedConventions, useGetUsersConventions } from "../../../shared/hooks";

//Type
import type { ConventionType } from "../../../shared/types/Convention.type";

//Style
import './account.css';
import { useNavigate } from "react-router-dom";

export const Account:FC = () => {

    useDocumentTitle('StandardsHUB | Account');

    const [activeModal, setActiveModal] = useState<'password' | 'username' | 'delete' | null>(null);
    
    const nav = useNavigate();

    //Get all the data
    const { data:userData, isLoading, isError, error } = useGetUserData(); 
    const { data:conventionData, isLoading:isConventionLoading, isError:isConventionError, error:conventionError } = useGetUsersConventions(); 
    const { data:likedData, isLoading:isLikeLoading, isError:isLikeError, error:likeError } = useGetUserLikedConventions(); 

    const handleLogOut = async() => {
        console.log('logout');
        const data:any = await authService.logout();

        if(data && data.status === 200){
            nav('/');
        }

    }
 
    const handleChangeUserName = () => {
        setActiveModal('username');
    }

    const handleChangePassword = () => {
        setActiveModal('password');
    }

    const handleDeleteAccount = () => {
        setActiveModal('delete');
    }

    const closeModal = () => {
        setActiveModal(null);
    }


    return (
        <>
            <Header
                title="MY ACCOUNT"
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
                                                key={ convention.slug }
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
                                                key={ convention.convention.slug }
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
                    <h2>DANGER ZONE</h2>
                    <button
                        onClick={ handleLogOut }
                        className="account-button"
                    >
                        LOGOUT
                    </button>
                    <button
                        onClick={ handleChangeUserName }
                        className="account-button"
                    >
                        CHANGE USERNAME
                    </button>
                    <button
                        onClick={ handleChangePassword }
                        className="account-button"
                    >
                        CHANGE PASSWORD
                    </button>
                    <button
                        onClick={ handleDeleteAccount }
                        className="account-button delete"
                    >
                        DELETE ACCOUNT
                    </button>

                </div>
            </PreFooter>

            <ChangePasswordModal
                isOpen={activeModal === 'password'} 
                onClose={closeModal} 
            />
            <ChangeUsernameModal
                isOpen={activeModal === 'username'} 
                onClose={closeModal} 
            />
            <DeleteAccountModal
                isOpen={activeModal === 'delete'} 
                onClose={closeModal} 
            />
        </>
    )
}
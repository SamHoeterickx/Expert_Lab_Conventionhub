import { useNavigate } from "react-router-dom";
import { useState, type FC } from "react";

//Components
import { ConventionCard, Header, PreFooter } from "../../../shared/components";

//Modals
import { ChangePasswordModal, ChangeUsernameModal, DeleteAccountModal } from "../../../shared/utils/modals";

//Service
import { authService } from "../../../shared/services";

//Hooks
import { useDocumentTitle, useGetUserData, useGetUserLikedConventions, useGetUsersConventions } from "../../../shared/hooks";

//Type
import type { ConventionType } from "../../../shared/types/Convention.type";

//Const
import { ROUTES } from "../../../shared/const/routes.const";

//Style
import './account.css';

export const Account: FC = () => {

    useDocumentTitle('ConventionHUB | Account');

    const [activeModal, setActiveModal] = useState<'password' | 'username' | 'delete' | null>(null);
    
    const nav = useNavigate();

    // Get all the data
    const { data: userData, isLoading } = useGetUserData(); 
    const { data: conventionData, isLoading: isConventionLoading } = useGetUsersConventions(); 
    const { data: likedData, isLoading: isLikeLoading } = useGetUserLikedConventions(); 

    const isPageLoading = isLoading || isConventionLoading || isLikeLoading;
    const hasData = userData?.data && likedData?.data && conventionData?.data;

    const handleLogOut = async () => {
        console.log('logout');
        const data: any = await authService.logout();

        if (data && data.status === 200) {
            nav(ROUTES.HOME); 
            window.location.reload();
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
            <Header title="MY ACCOUNT" />
            
            <div className="account-top-right-corner-container">
                <div className="account-top-right-corner"></div>
            </div>

            <section className="account-userdata-wrapper">
            {isPageLoading ? (
                <></>
            ) : hasData ? (
                <>
                    <div className="account-top-info-wrapper">
                        <h1> {userData.data.username.toUpperCase()} </h1>
                        <h4> {userData.data.email.toUpperCase()} </h4>
                    </div>

                    <div className="account-my-conventions-container">
                        <h2>MY STANDARDS</h2>
                        <div className="account-my-conventions-wrapper">
                            {conventionData.data.length !== 0 ? (
                                conventionData.data.map((convention: ConventionType) => (
                                    <ConventionCard
                                        key={convention.slug}
                                        convention_title={convention.title}
                                        convention_description={convention.description}
                                        convention_link={convention.slug}
                                    />
                                ))
                            ) : (
                                <h4>No contributes yet</h4>
                            )}
                        </div> 
                    </div>

                    <div className="account-my-conventions-container">
                        <h2>MY LIKED STANDARDS</h2>
                        <div className="account-my-conventions-wrapper">
                            {likedData.data.length !== 0 ? (
                                likedData.data.map((convention: any) => (
                                    <ConventionCard
                                        key={convention.convention.slug}
                                        convention_title={convention.convention.title}
                                        convention_description={convention.convention.description}
                                        convention_link={convention.convention.slug}
                                    />
                                ))
                            ) : (
                                <h4>No liked conventions yet</h4>
                            )}
                        </div>
                    </div>
                </>
            ) : null}
            </section>

            <PreFooter>
                <div className="account-action-wrapper">
                    <h2>DANGER ZONE</h2>
                    <button onClick={handleLogOut} className="account-button">
                        LOGOUT
                    </button>
                    <button onClick={handleChangeUserName} className="account-button">
                        CHANGE USERNAME
                    </button>
                    <button onClick={handleChangePassword} className="account-button">
                        CHANGE PASSWORD
                    </button>
                    <button onClick={handleDeleteAccount} className="account-button delete">
                        DELETE ACCOUNT
                    </button>
                </div>
            </PreFooter>

            {!isPageLoading && hasData && (
                <>
                    <ChangePasswordModal
                        isOpen={activeModal === 'password'} 
                        email={userData.data.email}
                        onClose={closeModal} 
                    />
                    <ChangeUsernameModal
                        isOpen={activeModal === 'username'} 
                        email={userData.data.email}
                        onClose={closeModal} 
                    />
                    <DeleteAccountModal
                        isOpen={activeModal === 'delete'} 
                        onClose={closeModal} 
                        username={userData.data.username}
                    />
                </>
            )}
        </>
    );
}
import { useEffect, type FC } from "react";

//Components
import { Header, PreFooter } from "../../../shared/components";

//Hooks
import { useDocumentTitle } from "../../../shared/hooks";
import { getUserData } from "../../../shared/hooks/auth/useGetUserData.hook";

//Style
import './account.css';

export const Account:FC = () => {

    useDocumentTitle('StandardsHUB | Account');
    const { data, isLoading, isError, error } = getUserData(); 

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <>
            <Header
                title="Account"
            />
            <div className="account-top-right-corner-container">
                <div className="account-top-right-corner"></div>
            </div>

            <PreFooter>
                <div className="account-action-wrapper"></div>
            </PreFooter>
        </>
    )
}
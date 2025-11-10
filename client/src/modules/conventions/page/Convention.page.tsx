import { useParams } from "react-router-dom"
import { useEffect, useState, type FC } from "react";

//Components
import { Header } from "../../../shared/components"

//Hooks
import { useGetSingleConvention } from "../../../shared/hooks";

//Type

export const Convention:FC = () => {
    
    const { id } = useParams();

    
    const {data, isLoading, isError, error} = useGetSingleConvention(id)


    useEffect(() => {
        console.log(id);
    },[]);


    return( 
        <>
            {
                data && data.data &&
                <Header title={ data.data.title.toUpperCase()} />
            }
        </>
    )
}
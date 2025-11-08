import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router"

//Type
interface ScrollWrapperProps{
    children: React.ReactNode,
}

export const ScrollWrapper = ({ children }: ScrollWrapperProps) => {

    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname])

    return children
}
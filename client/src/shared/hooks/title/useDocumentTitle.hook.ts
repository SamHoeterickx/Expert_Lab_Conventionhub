import { useEffect } from "react"

export const useDocumentTitle = (title:string, prevailOnUnmount:boolean = false) => {
    useEffect(() => {
        const previousTitle = document.title;
        
        document.title = title;

        return () => {
            if (!prevailOnUnmount) {
              document.title = previousTitle;
            }
        };
        
    }, [title, prevailOnUnmount])
}
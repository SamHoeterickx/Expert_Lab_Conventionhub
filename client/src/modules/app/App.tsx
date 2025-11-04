import { Outlet } from "react-router-dom"

//Components
import { Footer } from "../../shared/components"

export const App = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}
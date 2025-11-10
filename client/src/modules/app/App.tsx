import { Outlet } from "react-router-dom"

//Components
import { Footer, Navigation } from "../../shared/components"

export const App = () => {
    return (
        <>
            {/* <Navigation /> */}
            <Outlet />
            <Footer />
        </>
    )
}
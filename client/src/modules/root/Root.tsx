import { createHashRouter, RouterProvider } from "react-router-dom";

//Components
import { App } from "../app";

//Routes
import { CONTRIBUTE_ROUTE } from "../contribute";
import { EXPLORE_ROUTE } from "../explore";
import { HOME_ROUTE } from "../home";

export const Root = () => {

    const ROUTE = createHashRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: HOME_ROUTE.path,
                    element: HOME_ROUTE.element,
                },
                {
                    path: EXPLORE_ROUTE.path,
                    element: EXPLORE_ROUTE.element
                },
                {
                    path: CONTRIBUTE_ROUTE.path,
                    element: CONTRIBUTE_ROUTE.element
                }
            ]
        }
    ]);
    
    return <RouterProvider router={ ROUTE } />
}
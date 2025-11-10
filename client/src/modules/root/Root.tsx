import { createHashRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//Components
import { App } from "../app";

//Routes
import { CONTRIBUTE_ROUTE } from "../contribute";
import { EXPLORE_ROUTE } from "../explore";
import { HOME_ROUTE } from "../home";
import { Auth, LOGIN_ROUTE, REGISTER_ROUTE } from "../auth";
import { CONVENTION_ROUTE } from "../conventions";

export const Root = () => {

    const QUERY_CLIENT = new QueryClient();

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
                },
                {
                    path: CONVENTION_ROUTE.path,
                    element: CONVENTION_ROUTE.element
                }
            ]
        },
        {
            path:'/auth/',
            element: <Auth />,
            children: [
                {
                    path: LOGIN_ROUTE.path,
                    element: LOGIN_ROUTE.element
                },
                {
                    path: REGISTER_ROUTE.path,
                    element: REGISTER_ROUTE.element
                }
            ]
        }
    ]);
    
    return (
        <QueryClientProvider client={ QUERY_CLIENT } >
            <RouterProvider router={ ROUTE } />
        </QueryClientProvider>
    )
}
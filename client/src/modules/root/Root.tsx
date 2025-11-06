import { createHashRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//Components
import { App } from "../app";

//Routes
import { CONTRIBUTE_ROUTE } from "../contribute";
import { EXPLORE_ROUTE } from "../explore";
import { HOME_ROUTE } from "../home";

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
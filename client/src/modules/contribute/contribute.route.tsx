import { Contribute } from "./page/Contribute.page"

//Auth
import { ProtectedRoute } from "../../shared/components/protectedRoute/ProtectedRoute"

//Routes
import { LOGIN_ROUTE } from "../auth/login/"

export const CONTRIBUTE_ROUTE = {
    path: 'contribute',
    element: (
        <ProtectedRoute redirect_path={`/auth/${LOGIN_ROUTE.path}?redirect_uri=contribute`}>
            <Contribute />
        </ProtectedRoute>
    )
}
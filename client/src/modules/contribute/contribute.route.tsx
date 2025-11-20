import { Contribute } from "./page/Contribute.page"

//Auth
import { ProtectedRoute } from "../../shared/components/protectedRoute/ProtectedRoute"

//Const
import { ROUTES } from "../../shared/const/routes.const"

export const CONTRIBUTE_ROUTE = {
    path: 'contribute',
    element: (
        <ProtectedRoute redirect_path={`/${ROUTES.AUTH_ROOT}/${ROUTES.LOGIN}?redirect_uri=${ROUTES.CONTRIBUTE}`}>
            <Contribute />
        </ProtectedRoute>
    )
}
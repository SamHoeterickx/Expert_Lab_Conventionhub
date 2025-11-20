import { Account } from "./page/Account.page";

//Auth
import { ProtectedRoute } from "../../shared/components/protectedRoute/ProtectedRoute";

//Const
import { ROUTES } from "../../shared/const/routes.const";

export const ACCOUNT_ROUTE = {
    path: ROUTES.ACCOUNT,
    element: (
        <ProtectedRoute redirect_path={`/${ROUTES.AUTH_ROOT}/${ROUTES.LOGIN}?redirect_uri=${ROUTES.ACCOUNT}`}>
            <Account />
        </ProtectedRoute>
    )
};
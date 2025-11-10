import { Contribute } from "./page/Contribute.page"

//Auth
import { ProtectedRoute } from "../../shared/components"

export const CONTRIBUTE_ROUTE = {
    path: '',
    element: (
        <ProtectedRoute redirect_path={"/auth/login"}>
            <Contribute />
        </ProtectedRoute>
    )
}
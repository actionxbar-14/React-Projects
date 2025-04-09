import AdminRoute from "./admin";
import MemberRoute from "./member";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    AdminRoute,
    MemberRoute,
])

export default router;

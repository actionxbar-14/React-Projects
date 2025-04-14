import AdminRoute from "./admin";
import MemberRoute from "./member";
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import LandingLayout from "../layouts/landing";

 const UnAutharized = lazy(() => import("../views/errors/unAutharized"));

const LandingPage = lazy(() => import("../views/landing/index"));
const LandingRoute ={
    path: "/",
    element: <LandingLayout />,
    children:[
     {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/401",
        element: <UnAutharized />,
    },
    {
        path: "*",
        element: <div><p className="text-6xl text-center text-red-400">page not found</p></div>,
    }

]
}
const router = createBrowserRouter([
    AdminRoute,
    MemberRoute,
    LandingRoute
])

export default router;

import { lazy } from "react";
import ProtectedRoute from "../ProtectedRoute";
// import AdminLayout from "../../layouts/admin";
import  MemberLayout  from "../../views/member";

const MemberLanding = lazy(() => import("../../layouts/member"));

const MemberRoute = {
  path: "/member",
  element: <ProtectedRoute layout={<MemberLayout />} role="member" />,
  children: [
    {
      path: "/member",
      element: <MemberLanding />,
    },
  ],
};

export default MemberRoute;
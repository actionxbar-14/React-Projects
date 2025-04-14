import { lazy } from "react";
import ProtectedRoute from "../ProtectedRoute";
import AdminLayout from "../../layouts/admin";

const AdminLanding = lazy(() => import("../../views/admin/index"));

const adminRoute = {
  path: "/admin",
  element: <ProtectedRoute layout={<AdminLayout />} role="admin" />,
  children: [
    {
      path: "/admin",
      element: <AdminLanding />,
    },
 
  ],
};

export default adminRoute;
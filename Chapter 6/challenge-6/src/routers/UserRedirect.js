import { useLocation, Navigate, Outlet } from "react-router-dom";
import authService from "../services/auth.service";

const currUser = authService.getCurrentUser();
const location = useLocation;

const AdminRedirect = () => {
  if (currUser.access_token || currUser.role === "admin") {
    console.log(currUser);
    return <Outlet />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};
const CustomerRedirect = () => {
  if (currUser.stsTokenManager.accessToken) {
    console.log(currUser);
    return <Outlet />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};
const UserRedirect = {
  AdminRedirect,
  CustomerRedirect,
};

export default UserRedirect;

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};

export default PrivateRoutes;

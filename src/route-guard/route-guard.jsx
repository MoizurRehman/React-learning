import { Navigate, Outlet } from "react-router-dom";

const RoutGuard = () => {
  let auth = true;
  return <>{auth ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default RoutGuard;

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useDataContext } from "../context/conxtext";
const RoutGuard = () => {
  const allMenus = useDataContext();
  const currentLocation = useLocation();
  const findpath = allMenus.menus?.find(
    (item) => item.path === currentLocation.pathname
  );
  return (
    <>
      {findpath && localStorage.getItem("token") ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default RoutGuard;

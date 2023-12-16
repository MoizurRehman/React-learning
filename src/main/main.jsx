import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default Main;

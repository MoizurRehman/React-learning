import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login/login";
import Dashboard from "./dashboard/dashboard";
import Sales from "./sales/sales";
import Main from "./main/main";
import RoutGuard from "./route-guard/route-guard";

function App() {
  return (
    <Routes>
      {/* <Route path='/login' element={<Login/>}/> */}
      <Route path="/login" Component={Login} />
      <Route Component={RoutGuard}>
        <Route path="/feature" Component={Main}>
          <Route path="/feature/dashboard" Component={Dashboard} />
          <Route path="/feature/sales" Component={Sales} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;

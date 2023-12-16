import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = ({ children }) => {
  return (
    <>
      <main className="main">
        <aside className="sidebar">
          <nav className="nav">
            <ul>
              <li className="active">
                <Link to="/feature/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/feature/sales">Sales</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <section className="twitter">{children}</section>
      </main>
    </>
  );
};

export default Sidebar;

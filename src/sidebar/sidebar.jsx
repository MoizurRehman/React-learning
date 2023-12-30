import { Link } from "react-router-dom";
import "./sidebar.css";
import { useDataContext } from "../context/conxtext";
import { useState } from "react";

const Sidebar = ({ children }) => {
  const allMenus = useDataContext()?.menus;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onClickMenu = (index) => setSelectedIndex(index);
  return (
    <>
      <main className="main">
        <aside className="sidebar">
          <nav className="nav">
            <ul>
              {allMenus.map(({ path, name }, i) => {
                return (
                  <li
                    onClick={() => onClickMenu(i)}
                    className={selectedIndex === i ? "active" : null}
                    key={i}
                  >
                    <Link to={path}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <section className="twitter">{children}</section>
      </main>
    </>
  );
};

export default Sidebar;

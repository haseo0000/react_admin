import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { listMenu } from "../../listMenu";
import "./Sidebar-styled.css";

function Sidebar() {
  const [pathName, setPathName] = useState();

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarWrapepr">
        {listMenu.map((item, index) => (
          <div className="sidebarMenu" key={index}>
            <h3 className="sidebarTitle">{item.title}</h3>
            <ul className="sidebarList">
              {item.sections.map((section, index) => (
                <Link
                  key={index}
                  to={section.path}
                  className="link-bar"
                  as={NavLink}
                  onClick={() => setPathName(section.path)}>
                  <li
                    className={`sidebarListItems ${
                      section.path === pathName ? "active" : ""
                    }`}>
                    {section.icon}
                    {section.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

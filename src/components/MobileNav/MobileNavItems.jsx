
import React, { useState } from "react";
import SubNavItems from "./SubNavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby-plugin-react-i18next";
import { useLocation } from '@reach/router';

const MobileNavItems = ({ navItem = {} }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const [expand, setExpand] = useState(false);

  const handleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpand(!expand);
  };

  const { name, href, subNavItems } = navItem;
  return (
    <li
      className={`menu-item-has-children${pathname === href ? " current" : ""}`}
    >
      <Link to={href} className={expand ? "expanded" : ""}>
        {name}
        {subNavItems?.length ? (
          <button
            onClick={handleExpand}
            aria-label='dropdown toggler'
            className={expand ? "expanded" : ""}
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        ) : (
          ""
        )}
      </Link>

      <ul
        className={`list ${expand ? "open " : ""}`}
      // style={{
      //   display: expand ? "block" : "none",
      // }}
      >
        {subNavItems?.map((subItem) => (
          <SubNavItems subItem={subItem} key={subItem.id} />
        ))}
      </ul>
    </li>
  );
};

export default MobileNavItems;

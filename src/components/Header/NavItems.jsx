
import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const NavItems = ({ navItem = {} }) => {
  const { name, href, subNavItems } = navItem;
  const location = useLocation();
  const pathname = location.pathname;
  const subHref = subNavItems?.map((item) => item.href);
  const current = pathname === href || subHref?.includes(pathname);
  return (
    <li className={`menu-item-has-children${current ? " current" : ""}`}>
      <Link to={href}>{name}</Link>
      <ul>
        {subNavItems.map((subItem) => (
          <li
            className={
              subItem?.subItems?.length ? "menu-item-has-children" : ""
            }
            key={subItem.id}
          >
            <Link to={subItem.href}>{subItem.name}</Link>
            <ul>
              {subItem?.subItems?.map((item) => (
                <li key={item.id}>
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavItems;

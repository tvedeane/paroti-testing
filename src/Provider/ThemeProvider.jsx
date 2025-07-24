
import React, { useEffect, useState } from "react";
import context from "./context";
import { useLocation } from "@reach/router";

const ThemeProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [menuStatus, setMenuStatus] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);


  const location = useLocation();
  const pathname = location.pathname;

  const toggleMenu = (value) => {
    setMenuStatus((preMenuStatus) =>
      value === undefined
        ? !preMenuStatus
        : typeof value === "boolean"
          ? value
          : !!value
    );
  };

  const toggleSearch = () => {
    setOpenSearch((preSearch) => !preSearch);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    document.body.classList.toggle("locked", !isExpanded);
  };
  useEffect(() => {
    toggleMenu(false);
    setIsExpanded(false);
  }, [pathname]);
  const value = {
    handleToggle,
    isExpanded,
    setIsExpanded,
    menuStatus,
    openSearch,
    toggleMenu,
    toggleSearch,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ThemeProvider;

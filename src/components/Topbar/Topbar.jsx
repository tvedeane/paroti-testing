
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headerData from "@/data/HeaderData";
import { useLocation } from "@reach/router";

const { icons, social } = headerData;

const Topbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div
      className={`topbar ${pathname === "/home2/"
        ? "d-none"
        : pathname === "/home3/"
          ? "topbar--three"
          : ""
        }`}
    >
      <div className='container-fluid'>
        <div className='topbar__inner'>
          <ul className='list-unstyled topbar__info'>
            {icons.map(({ id, icon, content, subHref }) => (
              <li key={id}>
                <FontAwesomeIcon icon={icon} />
                <div className='text'>
                  <a href={`${subHref}:${content}`}>{content}</a>
                </div>
              </li>
            ))}
          </ul>
          <div className='topbar__social'>
            {social.map(({ icon, link }, index) => (
              <a href={link} key={index}>
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
          <ul className='list-unstyled topbar__links'>
            <li>
              <a href='#'>Login</a>
            </li>
            <li>
              <a href='#'>Register</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

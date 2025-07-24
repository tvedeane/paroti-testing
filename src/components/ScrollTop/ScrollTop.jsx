

import React from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTop from "react-scroll-to-top";

const ScrollTop = () => {
  return (
    <ScrollToTop
      smooth
      component={
        <i>
          <FontAwesomeIcon icon={faAngleUp} />
        </i>
      }
    />
  );
};

export default ScrollTop;

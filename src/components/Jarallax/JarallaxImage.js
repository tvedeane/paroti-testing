import React from 'react';





const JarallaxImage = ({ className = "", alt = "", ...props }) => {
  return <img className={`jarallax-img ${className}`} alt={alt} {...props} />;
};

export default JarallaxImage;

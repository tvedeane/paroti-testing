import React from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import Image from "../Image/Image";

const Modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
  currentIndex,
  length,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className='overlay dismiss' onClick={handleClick}>
        <div>
          <Image width={300} height={300} relativePath={clickedImg} alt='bigger pic' />
          <p
          // style={{
          //   position: "absolute",
          //   top: "100%",
          //   left: "50%",
          //   color: "#fff",
          // }}
          >
            {currentIndex + 1} / {length}
          </p>
        </div>
        <span className='dismiss' onClick={handleClick}>
          X
        </span>
        <div onClick={handelRotationLeft} className='overlay-arrows_left'>
          <div>
            <GoTriangleLeft />
          </div>
        </div>
        <div onClick={handelRotationRight} className='overlay-arrows_right'>
          <div>
            <GoTriangleRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

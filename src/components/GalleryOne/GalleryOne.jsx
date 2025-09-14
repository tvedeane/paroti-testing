"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Modal from "./Modal";
import Slider from "react-slick";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

var settings = {
  dots: false,
  arrows: false,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 6000,
  cssEase: "linear",
  pauseOnHover: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const GalleryOne = () => {
  const { language } = useI18next();
  const galleryOneData = getData(language, "GalleryOneData");
  const [mounted, setMounted] = useState(false);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.image);
  };

  const handelRotationRight = () => {
    const totalLength = galleryOneData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = galleryOneData[0].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = galleryOneData.filter((item) => {
      return galleryOneData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = galleryOneData.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = galleryOneData[totalLength - 1].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = galleryOneData.filter((item) => {
      return galleryOneData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className="gallery-one">
      <Container>
        <Slider {...settings} className="gallery-one__carousel">
          {galleryOneData.map((galleryOne, index) => (
            <div key={galleryOne.id} className="item p-3">
              <div className="gallery-card">
                <div className="gallery-card__image">
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    relativePath={galleryOne.image}
                    alt=""
                  />
                </div>

                <div className="gallery-card__content">
                  <a className="img-popup" style={{ cursor: "pointer" }}>
                    <i>
                      <FontAwesomeIcon
                        icon={galleryOne.icon}
                        onClick={() => handleClick(galleryOne, index)}
                      />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
            currentIndex={currentIndex}
            length={galleryOneData.length}
          />
        )}
      </Container>
    </section>
  );
};

export default GalleryOne;

import testimonialTwoData from "@/data/TestimonialsTwoData";

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs } from "swiper/modules";
import Image from "../Image/Image";

const TesTimonialsTwo = () => {
  const { bg, carouselData, images } = testimonialTwoData;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className='testimonials-two'>
      <div
        className='testimonials-two__bg'
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <Container>
        <Swiper
          className='swiper-container testimonials-two__thumb'
          id='testimonials-two__thumb'
          slidesPerView={3}
          spaceBetween={10}
          direction={"vertical"}
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <Image relativePath={image.image} alt='' />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          className='testimonials-two__carousel'
          id='testimonials-two__carousel'
          observer={true}
          observeParents={true}
          speed={1400}
          mousewheel={false}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            el: "#testimonials-two__carousel-pagination",
            type: "bullets",
            clickable: true,
          }}
          modules={[Pagination, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
        >
          {carouselData.map((data) => (
            <SwiperSlide key={data.id}>
              <div className='testimonials-two__card'>
                <div className='testimonials-two__card__image'>
                  <Image relativePath={data.cardImage} alt='' />
                </div>

                <div className='testimonials-two__card__content'>
                  <p className='testimonials-two__card__text'>{data.text}</p>

                  <h3 className='testimonials-two__card__title'>{data.name}</h3>

                  <span className='testimonials-two__card__designation'>
                    {data.desig}
                  </span>
                </div>

                <i className={data.icon}></i>
              </div>
            </SwiperSlide>
          ))}
          <div id='testimonials-two__carousel-pagination'></div>
        </Swiper>
      </Container>
    </section>
  );
};

export default TesTimonialsTwo;

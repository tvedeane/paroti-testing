import React from "react";
import Image from "../Image/Image";

const SingleTestimonialOne = ({ carousel }) => {
  const { icon, text, name, desig, itemImage, cardImage } = carousel;


  return (
    <div className='item'>
      <div className='testimonials-card'>
        <i className={icon}></i>

        <Image className='testimonials-card__bg' relativePath={itemImage} alt='' />

        <p className='testimonials-card__text'>{text}</p>

        <div className='testimonials-card__meta clearfix'>
          <Image relativePath={cardImage} alt='meta' />

          <h3 className='testimonials-card__name'>{name}</h3>

          <p className='testimonials-card__designation'>{desig}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonialOne;

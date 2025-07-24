
import React from "react";
import { Link } from "gatsby";

import Progress from "../Progress/Progress";
import Image from "../Image/Image";

const SingleCarousel = ({ carousel }) => {
  const { image, category, title, text, count, amounts, accentColor } =
    carousel;
  return (
    <div className='item'>
      <div className='donations-card' style={{ "--accent-color": accentColor }}>
        <div className='donations-card__image'>
          <Image
            style={{
              width: "100%",
              height: "auto",
            }}
            relativePath={image}
            alt=''
          />

          <div className='donations-card__category'>
            <a href='#'>{category}</a>
          </div>
        </div>

        <div className='donations-card__content'>
          <h3 className='donations-card__title'>
            <Link to='/donations-details'>{title}</Link>
          </h3>

          <p className='donations-card__text'>{text}</p>
          <Progress percent={count} />

          <div className='donations-card__amount'>
            {amounts?.map((amount) => (
              <p key={amount.id}>
                <span>${amount.amount}</span> {amount.desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCarousel;

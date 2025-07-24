import React from "react";
import { sidebar } from "@/data/DonationDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import Image from "../Image/Image";

const Sidebar = () => {
  const { organizer, donations, donationsTitle } = sidebar;
  return (
    <div className='sidebar'>
      <div className='sidebar__single'>
        <ul className='list-unstyled sidebar__organizer'>
          {organizer.map((org) => (
            <li key={org.id}>
              <Image relativePath={org.image} />


              <p className='sidebar__organizer__date'>{org.date}</p>

              <p className='sidebar__organizer__meta'>
                Organizer: <span>{org.name}</span>
              </p>

              <ul className='list-unstyled'>
                {org.lists.map((list) => (
                  <li key={list.id}>
                    <i>
                      <FontAwesomeIcon icon={list.icon} />
                    </i>
                    <a href='#'>{list.text}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className='sidebar__single'>
        <h3 className='sidebar__title'>{donationsTitle}</h3>
        <ul className='list-unstyled sidebar__donations'>
          {donations.map(({ id, image, amount, name, time, text }) => (
            <li key={id}>
              <Image relativePath={image} />


              <p className='sidebar__donations__amount'>{amount}</p>

              <p className='sidebar__donations__meta'>
                <span>{name}</span> {time}
              </p>
              <p className='sidebar__donations__text'>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

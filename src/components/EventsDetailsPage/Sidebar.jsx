import React from "react";
import { sidebar } from "@/data/EventDetailsPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { socials } = sidebar;

const Sidebar = ({ date, location }) => {
  return (
    <div className="events-details__sidebar">
      <div className="events-details__sidebar__single">
        <div className="events-details__sidebar__info">
          <p>
            <span>Starting time:</span>
            8:00 am to 2:00 pm
          </p>
          <p>
            <span>Date:</span>
            {date}
          </p>
          <p>
            <span>Categroy:</span>
            <a href="#">Health</a>, <a href="#">Charity</a>
          </p>
          <p>
            <span>Website:</span>
            <a href="#" target="_blank">
              www.example.com
            </a>
          </p>
          <p>
            <span>Location:</span>
            {location}
          </p>
        </div>
      </div>
      <div className="events-details__sidebar__single">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="events-details__sidebar__map"
          allowfullscreen
        ></iframe>
      </div>

      <div className="events-details__sidebar__single">
        <div className="events-details__sidebar__social">
          {socials.map((social) => (
            <a key={social.id} href={social.href}>
              <i>
                <FontAwesomeIcon icon={social.icon} />
              </i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

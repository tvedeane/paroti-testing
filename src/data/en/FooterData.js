
import footerBg from "@/assets/images/backgrounds/footer-bg-1-1.jpg";

import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  footerBg,
  logo: "logo-light.png",
  about: "60 Broklyn Golden Street, New York United States of America",

  social,
  year: new Date().getFullYear(),
  author: "Tevily",

  icons: [
    {
      id: 1,
      icon: faTwitter,
      href: "#",
    },
    {
      id: 2,
      icon: faFacebook,
      href: "#",
    },
    {
      id: 3,
      icon: faPinterest,
      href: "#",
    },
    {
      id: 4,
      icon: faInstagram,
      href: "#",
    },
  ],
  links: [
    { id: 1, link: "/donations", title: "Recent causes" },
    { id: 2, link: "/about", title: "About us" },
    { id: 3, link: "/donations-details", title: "New campaign" },
    { id: 4, link: "/about", title: "Site map" },
    { id: 5, link: "events", title: "Events" },
  ],
  nonProfit: [
    { id: 1, link: "/donations-details", title: "Differently abled kids" },
    { id: 2, link: "/donations-details", title: "Help child cancer" },
    { id: 3, link: "/donations-details", title: "Clean pure water" },
    { id: 4, link: "/donations-details", title: "Give them education" },
    { id: 5, link: "/donations-details", title: "Start a fundraising" },
  ],
  contacts: [
    {
      id: 1,
      icon: faEnvelope,
      title: "needhelp@company.com",
      subHref: "mailto",
    },
    { id: 2, icon: faMobile, title: "+ 1 (307) 776-0608", subHref: "tel" },
  ],
};

export default footerData;

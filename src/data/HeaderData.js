

import {
  faTwitter,
  faFacebook,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMap,
  faMobile,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [
      {
        id: 1,
        name: "Home One",
        href: "/",
      },
      {
        id: 2,
        name: "Home Two",
        href: "/home2",
      },
      {
        id: 3,
        name: "Home Three",
        href: "/home3",
      },
      {
        id: 4,
        name: "Header Styles",
        href: "/",
        subItems: [
          {
            id: 1,
            name: "Header One",
            href: "/",
          },
          { id: 2, name: "Header Two", href: "/home2" },
          { id: 3, name: "Header Three", href: "/home3" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Pages",
    href: "#",
    subNavItems: [
      { id: 1, name: "About us", href: "/about" },
      { id: 2, name: "Our volunteer", href: "/volunteer" },
    ],
  },
  {
    id: 3,
    name: "Donations",
    href: "/donations",
    subNavItems: [
      { id: 1, name: "Donations", href: "/donations" },
      { id: 2, name: "Donations details", href: "/donations-details" },
    ],
  },

  {
    id: 4,
    name: "Events",
    href: "/events",
    subNavItems: [
      { id: 1, name: "Events", href: "/events" },
      { id: 2, name: "Events Details", href: "/event-details" },
    ],
  },
  {
    id: 5,
    name: "Blog",
    href: "/blog",
    subNavItems: [
      { id: 1, name: "Blog", href: "/blog" },
      { id: 2, name: "Blog Details", href: "/blog-details" },
    ],
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: faTwitter, link: "" },
  { icon: faFacebook, link: "" },
  { icon: faPinterest, link: "" },
  { icon: faInstagram, link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: faMap,
      content: "88 broklyn golden street. New York",
      subHref: "",
    },
    {
      id: 2,
      icon: faEnvelopeOpen,
      content: "needhelp@company.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: faMobile,
      content: "+ 1 (307) 776-0608",
      subHref: "tel",
    },
  ],
  navItems,
  social,
  main_logo: "logo-dark.png",
  logo_light: "logo-light.png",
};

export default headerData;

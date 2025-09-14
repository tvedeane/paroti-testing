import {
  faCheckCircle,
  faMapMarker,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const text1 =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
const text2 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in  with the release of Letraset sheets containing Lorem Ipsum passages, recently with desktop publishing software like. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle and scrambled it to make a type specimen book.";
const text3 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
const text4 =
  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software li Ipsum is simply dummy text of the printing and typesetting industry.";

export const donationsDetails = {
  title: "Your little help can heal their pains",
  accentColor: "#fdbe44",
  image: "donations/donations-d-1.jpg",
  category: "Medical",
  count: "36",
  amounts: [
    {
      id: 1,
      amount: "25,270",
      desc: "Raised",
    },
    {
      id: 2,
      amount: "30,000",
      desc: "Goal",
    },
  ],
  content: {
    texts: [text1, text2],
    title: "Summary",
    text3,
    lists: [
      {
        id: 1,
        icon: faCheckCircle,
        text: "Making this first true generator lorem",
      },
      {
        id: 2,
        icon: faCheckCircle,
        text: "Many desktop publish packages is not simply",
      },
      {
        id: 3,
        icon: faCheckCircle,
        text: "If you are going to passage has roots in a piece",
      },
    ],
    text4,
    donation1: "donations/donations-d-2-1.jpg",
    donation2: "donations/donations-d-2-2.jpg",
  },
  bottom: {
    btnText: "Donate us now",
    btnLink: "/contact",
    socials: [faTwitter, faFacebook, faPinterest, faInstagram],
  },
  presentation: {
    icon: "paroti-icon-checked",
    title: "Our presentation",
    btnText: "Download now",
    btnLink: "/contact",
  },
  commentsTitle: "02 Comments",
  comments: [
    {
      id: 1,
      image: "blog/blog-c-1.jpg",
      name: "Christine Eve",
      date: "20 Aug, 2022",
      text: "Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.",
      btnText: "Reply",
      link: "#",
    },
    {
      id: 2,
      image: "blog/blog-c-2.jpg",
      name: "Christine Eve",
      date: "20 Aug, 2022",
      text: "Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.",
      btnText: "Reply",
      link: "#",
    },
  ],
  form: {
    title: "Leave a comment",
  },
};

export const sidebar = {
  organizer: [
    {
      id: 1,
      image: "donations/donation-o-1.jpg",
      date: "Created 20 Aug, 2022",
      name: "Mike Hardson",
      lists: [
        { id: 1, icon: faTag, text: "Health" },
        { id: 2, icon: faMapMarker, text: "New York, USA" },
      ],
    },
  ],
  donationsTitle: "Recent donations",
  donations: [
    {
      id: 1,
      image: "donations/donations-s-1-1.jpg",
      amount: "$20",
      name: "David Marks",
      time: "3 hours ago",
      text: "God bless you dear",
    },
    {
      id: 2,
      image: "donations/donations-s-1-2.jpg",
      amount: "$20",
      name: "Aleesha Brown",
      time: "3 hours ago",
      text: "God bless you dear",
    },
    {
      id: 3,
      image: "donations/donations-s-1-3.jpg",
      amount: "$20",
      name: "Kevin Smith",
      time: "3 hours ago",
      text: "God bless you dear",
    },
    {
      id: 4,
      image: "donations/donations-s-1-4.jpg",
      amount: "$20",
      name: "Anonymous",
      time: "3 hours ago",
      text: "God bless you dear",
    },
  ],
};

export default donationsDetails;

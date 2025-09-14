
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const text1 =
  "Tliq is notm hendr erit a augue insu image pellen tes que id erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur adipiscing ullam blandit hendrerit faucibus suspendisse. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";

const text2 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ley of type and scrambled it to make a type specimen book.";

const text3 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version.";

const blogDetailsPage = {
  image: "blog/blog-d-1-1.jpg",
  date: "28 Oct",
  author: "Admin",
  totalComments: 2,
  title: "Online legal advice for asylum seekers in Greece",
  texts: [text1, text2, text3],
  tags: ["Donation", "Charity"],
  socials: [
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
  authorData: {
    image: "blog/blog-a-1.jpg",
    name: "Kevin martin",
    description:
      "Cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum lightly believable. If you are going to use a of you need to be sure there isn't anything embarrassing.",
  },
  comments: [
    {
      id: 1,
      image: "blog/blog-c-1.jpg",
      name: "Christine Eve",
      date: "20 Aug, 2022",
      message:
        "Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.",
    },
    {
      id: 2,
      image: "blog/blog-c-2.jpg",
      name: "Christine Eve",
      date: "20 Aug, 2022",
      message:
        "Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.",
    },
  ],
};

export const sidebar = {
  posts: [
    {
      id: 1,
      image: "blog/blog-s-1-1.jpg",
      comments: 2,
      title: "Learn how access to clean the water",
    },
    {
      id: 2,
      image: "blog/blog-s-1-2.jpg",
      comments: 2,
      title: "Learn how access to clean the water",
    },
    {
      id: 3,
      image: "blog/blog-s-1-3.jpg",
      comments: 2,
      title: "Learn how access to clean the water",
    },
  ],
  categories: [
    "Charity",
    "Fundrising",
    "Donations",
    "Save lifes",
    "Healthy food",
  ],
  tags: ["Donation", "Fundrising", "Education", "Charity", "Life"],
};

export default blogDetailsPage;

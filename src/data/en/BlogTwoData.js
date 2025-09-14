
import {
  faAngleDoubleRight,
  faComments,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const blogTwoData = {
  blogImage: "shapes/blog-h2-s-1.png",
  tagLine: "Watch our latest blogs",
  title: "Latest news & articles",
  blogData: [
    {
      id: 1,
      image: "blog/blog-2-1.jpg",
      author: "blog/blog-a-2-1.png",
      date: { day: "28", month: "Oct" },
      lists: [
        { id: 1, icon: faUser, cont: "Post by Admin" },
        { id: 2, icon: faComments, cont: "02 comments" },
      ],
      title: "Online legal advice for asylum seekers in Greece",
      link: "/blog-details",
      text: "I wanted to take a minute to thank you and your team. I have grown ....",
      linkIcon: faAngleDoubleRight,
      linkText: "Read More",
    },
    {
      id: 2,
      image: "blog/blog-2-2.jpg",
      author: "blog/blog-a-2-2.png",
      date: { day: "28", month: "Oct" },
      lists: [
        { id: 1, icon: faUser, cont: "Post by Admin" },
        { id: 2, icon: faComments, cont: "02 comments" },
      ],
      title: "Online legal advice for asylum seekers in Greece",
      text: "I wanted to take a minute to thank you and your team. I have grown ....",
      link: "/blog-details",
      linkIcon: faAngleDoubleRight,
      linkText: "Read More",
    },
  ],
};
export default blogTwoData;

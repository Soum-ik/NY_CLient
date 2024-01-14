import {} from "react-icons";
import img1 from "../../../public/images/img1.jpg";
import img2 from "../../../public/images/img2.jpg";
import img3 from "../../../public/images/img3.jpg";
import img4 from "../../../public/images/img4.jpg";
import img5 from "../../../public/images/img5.jpg";

const Categories = [
  {
    id: 1,
    name: "IT professionals",
    title:
      "Optimize your infrastructure with popular Azure solutions and services.",
    secondTitle: "Get started with Azure",
    Image: img1,
  },
  {
    id: 2,
    name: "Data analysts",
    title:
      "Create advanced, cloud-based analytics solutions at enterprise scale.",
    secondTitle: "Cloud-scale analytics",
    Image: img2,
  },
  {
    id: 3,
    name: "Cloud architects",
    title:
      "Get tools and support for every stage of cloud migration and modernization.",
    secondTitle: "Cloud migration",
    Image: img3,
  },
  {
    id: 4,
    name: "Business administrators",
    title:
      "Build your cloud business case with financial and technical guidance.",
    secondTitle: "Cloud economics",
    Image: img4,
  },
  {
    id: 5,
    name: "Students",
    title: "Learn about programming, cloud technologies, and developer tools.",
    secondTitle: "Student developer resources",
    Image: img5,
  },
];

export default Categories;

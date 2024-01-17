import Layout from "../Layout/layout";
import CustomComponent from "../CustomComponent";
import { useFetch } from "../../libs/fetchData";
export default function About() {
  const about = useFetch("http://localhost:5000/courses/about_c");
  return (
    <Layout>
      <CustomComponent
        dic={about.dic}
        button={about.button}
        Data={about.heading}
        img={about.image}
        imageSize={" max-h-[500px] sm:min-w-[400px] sm:mr-[10px] object-fit"}
      />
    </Layout>
  );
}

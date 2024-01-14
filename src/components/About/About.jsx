import Layout from "../Layout/layout";
import CustomComponent from "../CustomComponent";
import { heading } from "./data";
export default function About() {
  return (
    <Layout>
      <CustomComponent
        dic={heading.dic}
        button={heading.btn}
        Data={heading.name}
        img={heading.Image}
        imageSize={" max-h-[500px] sm:min-w-[400px] sm:mr-[10px] object-fit"}
      />
    </Layout>
  );
}

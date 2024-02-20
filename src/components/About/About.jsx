import Layout from "../Layout/layout";
import CustomComponent from "../CustomComponent";
import { useData } from "../../Context/Context-api";
export default function About() {
  const { data } = useData();

  return (
    <Layout>
      <CustomComponent
        dic={data.cdic}
        button={data.cbutton}
        Data={data.heading}
        img={data.aboutImage}
        imageSize={" max-h-[500px] sm:min-w-[400px] sm:mr-[10px] object-fit"}
      />
    </Layout>
  );
}

import Layout from "../Layout/layout";
import CustomComponent from "../CustomComponent";
import { useFetch } from "../../libs/paramsData";
import { useParams } from "react-router-dom";
export default function About() {
  const { id } = useParams();
  // console.log(id);
  const about = useFetch(id);

  return (
    <Layout>
      <CustomComponent
        dic={about.cdic}
        button={about.cbutton}
        Data={about.heading}
        img={about.aboutImage}
        imageSize={" max-h-[500px] sm:min-w-[400px] sm:mr-[10px] object-fit"}
      />
    </Layout>
  );
}

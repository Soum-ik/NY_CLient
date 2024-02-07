import CustomComponent from "../CustomComponent";
import { useFetch } from "../../libs/fetchData";
import config from "../../../config";
const Feture = () => {
  const motivation = useFetch(`${config.apiUrl}aboutus/motivation`);
  return (
    <div>
      <CustomComponent
        imageSize={" max-h-[550px] sm:mr-[20px] sm:min-w-[450px]"}
        dic={motivation.dic}
        Data={motivation.heading}
        img={motivation.image}
        button={motivation.button}
        what={`what`}
      />
    </div>
  );
};
export default Feture;

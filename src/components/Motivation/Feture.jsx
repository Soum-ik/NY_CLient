import CustomComponent from "../CustomComponent";
import { useFetch } from "../../libs/fetchData";
const Feture = () => {
  const motivation = useFetch("http://localhost:5000/aboutus/motivation");
  return (
    <div>
      <CustomComponent
        imageSize={" max-h-[550px] sm:mr-[20px] sm:min-w-[450px]"}
        dic={motivation.dic}
        Data={motivation.heading}
        img={motivation.image}
        button={motivation.button}
      />
    </div>
  );
};
export default Feture;

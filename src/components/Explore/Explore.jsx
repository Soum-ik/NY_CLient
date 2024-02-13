import CustomComponent from "../CustomComponent";
import { useFetch } from "../../libs/fetchData";
import config from "../../../config";

const Explore = () => {
  const explore = useFetch(`${config.apiUrl}explore`);

  return (
    <div>
      <CustomComponent
        button={explore.button}
        Data={explore.heading}
        dic={explore.dic}
        offer={"Course We Offer"}
        what={explore.booking}
        img={explore.image}
        imageSize={" sm:mr-[80px] h-[500px] w-[330px] sm:w-[400px]"}
      />
    </div>
  );
};
export default Explore;

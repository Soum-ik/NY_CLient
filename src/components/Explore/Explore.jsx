import CustomComponent from "../CustomComponent";
import { useFetch } from "../../libs/fetchData";

const Explore = () => {
  const explore = useFetch("http://localhost:5000/explore");
  return (
    <div>
      <CustomComponent
        button={explore.button}
        Data={explore.heading}
        dic={explore.dic}
        offer={"Course We Offer"}
        img={explore.image}
        imageSize={" sm:mr-[50px] h-[500px] w-[360px] sm:w-[400px]"}
      />
    </div>
  );
};
export default Explore;

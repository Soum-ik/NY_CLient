import CustomComponent from "../CustomComponent";
import { useFetch } from "../../libs/fetchData";

const Hero = () => {
  const hero = useFetch("http://localhost:5000/hero");
  return (
    <div>
      <CustomComponent
        button={hero.button}
        dic={hero.dic}
        Data={hero.heading}
        img={hero.image}
      />
    </div>
  );
};
export default Hero;

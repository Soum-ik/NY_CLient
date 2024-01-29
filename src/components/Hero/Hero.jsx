import CustomComponent from "../CustomComponent";
import { useFetch } from "../../libs/fetchData";

const Hero = () => {
  const hero = useFetch("https://node-mongodb-vvwu.onrender.com/hero");
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

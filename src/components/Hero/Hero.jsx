import CustomComponent from "../CustomComponent";
import { useFetch } from "../../libs/fetchData";
import config from "../../../config";
const Hero = () => {
  const hero = useFetch(`${config.apiUrl}hero`);
  console.log(hero);  
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

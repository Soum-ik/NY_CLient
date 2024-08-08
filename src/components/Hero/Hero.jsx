import CustomComponent from "../CustomComponent";
const Hero = ({ hero }) => {
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
;
import CustomComponent from "../CustomComponent";
import image from "../../../public/images/future1.jpg";
import { motivationHeading, motivationText } from "../../Contants/contant";

const Feture = () => {
  return (
    <div>
      <CustomComponent
        imageSize={" max-h-[550px] sm:mr-[20px] sm:min-w-[450px]"}
        dic={motivationText}
        Data={motivationHeading}
        img={image}
        button={"Explore"}
      />
    </div>
  );
};
export default Feture;

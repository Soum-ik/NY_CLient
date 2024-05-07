import contact from "../../../public/images/contactus.jpg";
import RegistrationComponent from "./Email";

function Register() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className=" mt-10 px-10 sm:px-0 flex w-full justify-center"
    >
      <div className=" sm:max-w-[1000px] hidden sm:block">
        <img
          className=" max-h-[400px] min-w-[800px] object-cover opacity-90"
          src={contact}
          alt=""
        />
      </div>
      <RegistrationComponent />
    </div>
  );
}

export default Register;

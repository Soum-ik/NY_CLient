/* eslint-disable react/prop-types */
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppLink = ({ marginTop, textSize }) => {
  // const countryCode = "+880"; // Country code for Bangladesh
  // const phoneNumber = "1754759169"; // Replace with your Grameenphone phone number
  const message = "Welcome to Farjax Institute of Technology"; // Replace with your desired message

  const whatsappUrl = `https://wa.me/${"+19173962689"}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex gap-3 items-center justify-center uppercase ${marginTop}  ${textSize} `}
    >
      What's Up
      <BsWhatsapp size={20} />
    </a>
  );
};

export default WhatsAppLink;

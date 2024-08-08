import { Helmet } from "react-helmet";
function Chatbot() {
  return (
    <div className=" bg-primary text-center space-y-3 text-neutral-100 flex items-center flex-col py-16">
      {/* <h1 className="   text-5xl font-semibold">Chat with us</h1> */}
      <h1 className=" text-[30px] sm:text-[56px]  capitalize  text-white ">
        Chat with us
      </h1>

      <p className={` opacity-70 text-lg`}>
        {" "}
        Connect with a student consultant for course details.
      </p>
      <button
        className="rounded-full bg-[#1351D8] text-sm lg:text-2xl px-7 !py-3
       "
      >
        Live Chat
      </button>
      <Bot />
    </div>
  );
}

export default Chatbot;

export function Bot() {
  return (
    <Helmet>
      <script
        src="//code.tidio.co/opzwjdxl7qrxy5orjtzsebhwrf1kj8da.js"
        async
      ></script>

      {/* <script src="//code.tidio.co/kjjupi6wfkrja4pceibueyvpamb0zdlz.js" async></script> */}
    </Helmet>
  );
}

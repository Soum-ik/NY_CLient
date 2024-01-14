 
import ContactInp from "./ContactForm";

const ContactData = () => { 

  function sendEmail(e) {
    e.preventDefault();

    alert("Thank you!");
  }

  return (
    <form
      //   ref={form}
      onSubmit={sendEmail}
      className="sm:col-span-7 grid-cols-1  lg:col-span-8 sm:min-w-[400px] md:min-w-[600px] h-full flex flex-col justify-between "
    >
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 w-full mt-4 md:mt-0">
        <ContactInp
          placeholder="Your Name"
          type="text"
          name="from_name"
          required
          // value={fromData?.name || ""}
        />
        <ContactInp
          placeholder="Your Email"
          type="email"
          name="email"
          required
        />
        <ContactInp
          placeholder="Your phone number (optional)"
          type="text"
          name="phone"
        />
        <ContactInp placeholder="text" type="text" name="subject" />
      </div>
      <div className="w-full  my-4 flex-1">
        <div>
          <textarea
            className="w-full  rounded-md shadow-md p-3 border-1 border-gray-200 text-black focus:border-transparent focus:outline-transparent focus:ring-0 min-h-[200px] md:min-h-full lg:min-h-full"
            placeholder="Your Message"
            name="message"
            required
          />
        </div>
      </div>

      <div>
        <div className="text-center mt-1">
          <button
            type="submit"
            className=" bg-gradient-to-r from-red-800 to-red-700 outline-none   hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-7 md:hover:px-12 py-3.5 text-center text-white transition-all disabled:opacity-75 disabled:cursor-progress"
            name="message"
            // disabled={loading}
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};
export default ContactData;

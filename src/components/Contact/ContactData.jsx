import { useState } from "react";

const ContactData = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // Perform your email sending logic here
    // For now, let's just show a "Thank you" message
    alert("Thank You, Your Data Submit SuccessFully");
    setSubmitted(true);
  };

  const handleState = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const isFormValid = () => {
    return (
      form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      form.message.trim() !== ""
    );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="sm:col-span-7 grid-cols-1  lg:col-span-8 sm:min-w-[400px] md:min-w-[600px] h-full flex flex-col justify-between shadow-2xl p-2"
    >
      {submitted ? (
        <div className="text-center">
          <p className="text-xl font-bold bg-color rounded">
            Thank you for submitting!
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 w-full mt-4 md:mt-0">
            <input
              value={form.name}
              onChange={(e) => handleState(e, "name")}
              placeholder={"Enter your name"}
              className={`w-full rounded-md shadow-md border-1 border-gray-200 focus:border-transparent focus:outline-transparent focus:ring-0 p-4 text-black`}
            />
            <input
              value={form.email}
              onChange={(e) => handleState(e, "email")}
              placeholder={"Enter your email"}
              className={`w-full rounded-md shadow-md border-1 border-gray-200 focus:border-transparent focus:outline-transparent focus:ring-0 p-4 text-black`}
            />
          </div>

          <div className="w-full my-4 flex-1">
            <textarea
              value={form.message}
              onChange={(e) => handleState(e, "message")}
              className="w-full rounded-md shadow-md p-3 border-1 border-gray-200 text-black focus:border-transparent focus:outline-transparent focus:ring-0 min-h-[200px] md:min-h-full lg:min-h-full"
              placeholder="Your Message"
              name="message"
              required
            />
          </div>

          <div className="w-full my-4 flex-1">
            <input
              value={form.number}
              onChange={(e) => handleState(e, "number")}
              placeholder={"Enter your number (optional)"}
              className={`w-full rounded-md shadow-md border-1 border-gray-200 focus:border-transparent focus:outline-transparent focus:ring-0 p-4 text-black`}
            />
          </div>

          <div className="text-center mt-1">
            <button
              type="submit"
              className="bg-gradient-to-r from-red-800 to-red-700 outline-none hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-7 md:hover:px-12 py-3.5 text-center text-white transition-all disabled:opacity-75 disabled:cursor-progress"
              name="message"
              disabled={!isFormValid()}
            >
              Send Message
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default ContactData;

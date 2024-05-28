import SayTo from "../sayToknow/Register";
import PageLayout from "../Layout/PageLayout";
import Courses from "../all-courses/courses";
import Welcome from "../welcome";
import Chatbot from "../Bot/chatBot";
import Question, { Contact_us } from "../Officelocation/Question";

function ContactPage() {
  return (
    <div className="relative">
      <PageLayout contact={true}>
        <Welcome />
        <Question />
        <Chatbot />
        <Contact_us />
        <Courses />
        <SayTo />
      </PageLayout>
    </div>
  );
}

export default ContactPage;

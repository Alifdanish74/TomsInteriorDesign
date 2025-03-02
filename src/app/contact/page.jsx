import ContactForm from "../components/ContactForm";
import HeaderBackground from "../components/HeaderBackground";

export default function ContactPage() {
  return (
    <div className="container mx-auto pb-20">
      {/* <h1 className="text-4xl font-bold text-center mb-10">Get in Touch</h1> */}
      <HeaderBackground T="GET IN TOUCH" H1="Contact Us" P="We Love To Talk With You" />
      <ContactForm />
    </div>
  );
}

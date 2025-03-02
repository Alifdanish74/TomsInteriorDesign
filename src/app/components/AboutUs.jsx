import { BadgeCheckIcon } from "lucide-react";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section
      className="container min-h-screen mx-auto flex flex-col md:flex-row pt-5"
      style={{ backgroundImage: "url('section-bg-shape-1.svg')" }}
    >
      {/* left side */}
      <div className="w-3/4 md:w-1/2 flex px-6 items-center justify-center mx-auto">
        <img
          src="/about.jpg"
          alt="About Us"
          className="rounded-lg  shadow-md"
        />
      </div>
      {/* right side */}
      <div className="md:w-1/2 p-6">
        <p className="hidden md:flex my-5">→ About Us </p>
        <p className="md:hidden flex  my-5 text-3xl">→ About Us </p>
        <h2 className="text-2xl md:text-5xl py-2 font-bold">Transforming Spaces,</h2>
        <h2 className="text-2xl md:text-5xl text-[#7C877F] font-bold mb-4">
          Transforming Lives
        </h2>
        <p className="text-[#5f6761] pr-10 text-wrap">
          Our dedicated team of designers works closely with you to understand
          your vision and bring it to life with thoughtful attention to detail.
        </p>
        <p className="text-[#5f6761] pr-10 text-wrap">
          We have helped more than 300 clients who are busy & lacking time to
          fulfill dream homes with joy.
        </p>

        <div className=" lg:flex flex-row items-center justify-evenly mt-10">
          <div className="">
            <p className="flex my-4 gap-5">
              {" "}
              <BadgeCheckIcon />
              Creative Expertise
            </p>
            <p className="flex my-4 gap-5">
              <BadgeCheckIcon />
              Client-centered approach
            </p>
          </div>
          <div className="hidden md:flex border border-gray-400 h-20"></div>
          <div className="">
            <a
              href={
                "http://wasap.my/60194113867/Hi! Toms Interior Studio."
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 px-5 py-3 bg-[#7C877F] hover:bg-gray-600 text-white rounded-md mx-auto justify-center items-center"
            >
              {" "}
              <FaWhatsapp /> Get quotation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

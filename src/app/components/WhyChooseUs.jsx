"use client";
import { LuSofa } from "react-icons/lu";
import { BsHouseGear } from "react-icons/bs";
import { LuPaintRoller } from "react-icons/lu";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section
      className="container min-h-screen mx-auto flex flex-col md:flex-row p-5"
      style={{ backgroundImage: "url('section-bg-shape-1.svg')" }}
    >
      {/* left side */}
      <div className="md:w-1/2 px-6 pb-14 items-center justify-center mx-auto">
        <motion.p
          initial={{
            x: -50,
            opacity: 0,
          }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden md:flex my-5"
        >
          → Why Choose Us{" "}
        </motion.p>
        <p className="md:hidden flex  my-10 text-3xl">→ Why Choose Us </p>

        <motion.h2
          initial={{
            x: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className=" text-2xl md:text-5xl font-bold"
        >
          A behind the scenes look at{" "}
          <span className="text-[#7C877F]">our agency </span>
        </motion.h2>
        <h2 className=" text-2xl md:text-5xl text-[#7C877F] font-bold mb-4"></h2>

        <p className="text-[#5f6761] text-base pr-10 text-wrap">
          From concept to completion, discover how we bring your vision to life
          with innovation, collaboration, and expert craftsmanship.
        </p>

        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="group hover:bg-[#7C877F] my-8 lg:mr-20 lg:px-5 py-3 flex pl-5 rounded-2xl flex-row gap-4">
            <div className="flex mx-auto items-center justify-center">
              <LuSofa className="text-7xl rounded-full p-2 px-4 bg-green-50" />
            </div>
            <div>
              <h2 className="font-bold text-xl md:text-2xl font-sans py-2">
                Tailored Design Solutions
              </h2>
              <p className="text-[#676e69] text-base md:text-lg group-hover:text-white">
                We provide personalized interior design services that reflex
                your unique vision and lifestyle
              </p>
            </div>
          </div>
          <div className="group hover:bg-[#7C877F] my-8 lg:mr-20 lg:px-5 py-3 flex px-5 rounded-2xl flex-row gap-4">
            <div className="flex mx-auto items-center justify-center">
              <BsHouseGear className="text-7xl text-black rounded-full p-2 px-4 bg-green-50" />
            </div>
            <div>
              <h2 className="font-bold text-xl md:text-2xl font-sans py-2">
                Seemsless Project Management
              </h2>
              <p className="text-[#676e69] text-base md:text-lg group-hover:text-white">
                We handle the entire design process, from concept to completion,
                with flawless execution.
              </p>
            </div>
          </div>

          <div className="group hover:bg-[#7C877F] my-8 lg:mr-20 lg:px-5 py-3 flex pl-5 rounded-2xl flex-row gap-4">
            <div className="flex mx-auto items-center justify-center">
              <LuPaintRoller className="text-7xl rounded-full p-2 px-4 bg-green-50" />
            </div>
            <div>
              <h2 className="font-bold text-xl md:text-2xl font-sans py-2">
                Client-Centered Collaboration
              </h2>
              <p className="text-[#676e69] text-base md:text-lg group-hover:text-white">
                Your input is valued throughout the entire process, ensuring
                your vision is fully realised.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* right side */}
      <div className="md:w-1/2 px-5 md:px-0">
        <div className="grid grid-cols-3 gap-4 pb-2">
          {/* First image takes 2/3 of the grid */}
          <div className="col-span-2">
            <motion.img
              initial={{
                width: 0,
                x: -100,
                opacity: 0,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              whileInView={{ opacity: 1, width: "100%", x: 0 }}
              viewport={{ once: true }}
              src="/about.jpg"
              alt="First Image"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Second image takes 1/3 of the grid */}
          <div className="col-span-1">
            <motion.img
              initial={{
                width: 0,
                x: 100,
                opacity: 0,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              whileInView={{ opacity: 1, width: "100%", x: 0 }}
              viewport={{ once: true }}
              src="/about-2.jpg"
              alt="Second Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-2">
          {/* First image takes 2/3 of the grid */}
          <div className="col-span-1">
            <motion.img
              initial={{
                width: 0,
                x: -100,
                opacity: 0,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              whileInView={{ opacity: 1, width: "100%", x: 0 }}
              viewport={{ once: true }}
              src="/about-2.jpg"
              alt="Second Image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Second image takes 1/3 of the grid */}
          <div className="col-span-2">
            <motion.img
              initial={{
                width: 0,
                x: 100,
                opacity: 0,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              whileInView={{ opacity: 1, width: "100%", x: 0 }}
              viewport={{ once: true }}
              src="/about.jpg"
              alt="First Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

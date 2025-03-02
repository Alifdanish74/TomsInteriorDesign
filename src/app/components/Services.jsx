"use client";
import React from "react";
import { LuSofa } from "react-icons/lu";
import { GiGearHammer } from "react-icons/gi";
import { LuLamp } from "react-icons/lu";
import { BsDoorOpen } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section className="container min-h-screen px-10 md:px-16 py-16 mx-auto flex flex-col md:flex-row text-white bg-[#192324]">
      <div className="">
        <motion.p
          initial={{
            y: -50,
            opacity: 0,
          }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:flex my-5"
        >
          → How We Work{" "}
        </motion.p>
        <p className="md:hidden flex my-5 text-3xl">→ How We Work </p>

        <div className="flex flex-col md:flex-row justify-evenly md:gap-10 ">
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex basis-3/5  p-4"
          >
            <h2 className=" text-2xl md:text-5xl font-bold">
              From concept to completion in{" "}
              <span className="text-[#7C877F]">our work </span>
            </h2>
          </motion.div>

          <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex basis-2/5 leading-loose text-base p-4">
            Our comprehensive approach guides you through each phase of the
            design process, from inital brainstorming and conceptualization.
          </motion.div>
        </div>

        <div className="flex flex-wrap pt-16">
          <div className="w-full sm:w-1/2 md:w-1/4 p-2">
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className=" text-left p-4"
            >
              <LuSofa className="text-7xl text-gray-400" />
              <h2 className="py-4 font-bold text-lg md:text-2xl">
                01. Initial Consultation
              </h2>
              <p className="leading-loose text-base">
                We start with a one-on-on metting to understand your preferences
                and requirement.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full sm:w-1/2 md:w-1/4 p-2"
          >
            <div className=" text-left p-4">
              <LuLamp className="text-7xl text-gray-400" />
              <h2 className="py-4 font-bold text-lg md:text-2xl">
                02. Design Planning
              </h2>
              <p className="leading-loose text-base">
                This involves selecting materials, and layouts, furnishing, as
                well as creating 3D renderings.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full sm:w-1/2 md:w-1/4 p-2"
          >
            <div className=" text-left p-4">
              <GiGearHammer className="text-7xl text-gray-400" />
              <h2 className="py-4 font-bold text-lg md:text-2xl">
                03. Project Execution
              </h2>
              <p className="leading-loose text-base">
                With the design plans in this place, we manage and coordinate
                all aspects of the projects.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full sm:w-1/2 md:w-1/4 p-2"
          >
            <div className=" text-left p-4">
              <BsDoorOpen className="text-7xl text-gray-400" />
              <h2 className="py-4 font-bold text-lg md:text-2xl">
                04. Final Review
              </h2>
              <p className="leading-loose text-base">
                After completing project, we conduct a thorough walthrough with
                you to review the space.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;

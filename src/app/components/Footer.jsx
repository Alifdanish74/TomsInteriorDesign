"use client";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import WhatsAppButton from "./WhatsappButton";
// import JemputKahwinLogo from "../assets/JemputKahwinLogo.png";

function Footer() {
  const YEAR = new Date().getUTCFullYear();
  return (
    <>
      <footer className="p-4 bg-[#1a1a1a] sm:p-6 ">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-evenly">
            <div className="mb-6 md:mb-0 text-white pr-20">
              <a
                href="https://www.jemputkahwin.com.my"
                className="flex items-center"
              >
                {/* <img
                  src={JemputKahwinLogo}
                  className="mr-3 h-8"
                  alt="JemputKahwin Logo"
                /> */}
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  Désir Design Studio
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 pb-5 gap-4">
              <div className="">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Contact Us
                </h2>
                <ul className="text-white space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <CiLocationOn />
                    <span>Puchong, Malaysia</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <MdOutlineMail />
                    <span>desir.designbuild@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <MdOutlineMail />
                    <a
                      href={
                        "http://wasap.my/60123392783/Hi! Désir Design Studio."
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      +6 0194113867
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-left mx-auto">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  SITE MAP
                </h2>
                <ul className="text-white  ">
                  <li>
                    <a href="/#" className="hover:underline ">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="hover:underline">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="hover:underline">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hidden md:grid">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  About Us
                </h2>
                <ul className="text-white ">
                  <li>
                    <p>
                      Désir Design Studio was founded in the year 2015 to
                      provide interior design services. Soon after, we quickly
                      noticed the growing need in interior design field along
                      with great quality and efficiency.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center ">
              Copyright © {YEAR}
              <a href="https://www.google.com" className="hover:underline">
                {"\t"}Désir Design Studio
              </a>
            </span>
          </div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center ">
              All rights reserved.
              <a
                href="https://www.google.com"
                className="hover:underline text-blue-600"
              >
                {"\t"}Désir Design Studio (IP0508419-X)
              </a>
            </span>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </>
  );
}

export default Footer;

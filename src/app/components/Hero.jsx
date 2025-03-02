"use client";
import { Parallax } from "react-scroll-parallax";
import Button from "./Button";
import { useEffect, useState } from "react";
import CircularText from "../../components/ui/circular-text";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../../components/ui/images-slider";

const images = [
  "https://scontent.fkul4-5.fna.fbcdn.net/v/t39.30808-6/405265742_858395916291299_2415487472327766085_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nToHTe_9zVIQ7kNvgHA9sWo&_nc_oc=Adi9AYd2qbJrVXFvDu8Ha0AGdN3lv2FAvniTFiV7_CVdaS2qbhyWjVuCJJ7iNFj_eVgRyfV2oI2U922wlIIjfgxu&_nc_zt=23&_nc_ht=scontent.fkul4-5.fna&_nc_gid=A0OtNisi2XC4SbHRZ9uZmOh&oh=00_AYBI4tpd6KKyd7zoG_od8D48wDWmt3TBAVEzfdGZBz-6zw&oe=67C353AD",
  "https://scontent.fkul4-4.fna.fbcdn.net/v/t39.30808-6/405297109_860083052789252_6746027709672047064_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JTHCSlXuuFwQ7kNvgEQVvZH&_nc_oc=AdiHw3K6Nm3bCvIqhF2Zne5uQu-S0LUTshYH_XWDvRMeUIJHgOHmoVuM3RA9K6yxUzmDEss9H8D_tLr7JhU9Wq49&_nc_zt=23&_nc_ht=scontent.fkul4-4.fna&_nc_gid=AMPUghrJAJk4aydv2yCkdc3&oh=00_AYAVRg5z26cjgMOhUmXpdmI9n0B3WaMTFobH-Ji5OtfGLw&oe=67C36B34",
  "https://scontent.fkul4-5.fna.fbcdn.net/v/t39.30808-6/470183663_1137661515031403_2472304088140804177_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0Qg0XoxCYe4Q7kNvgG8OcZ1&_nc_oc=AdjElHZF70U7KqJp9zZro4lk655GTiw0X_zbFlMOOPUh8GrhXoFigZtBHYU7VkVrkVAfaK3qMT1y0C8F-ZjJ57Ei&_nc_zt=23&_nc_ht=scontent.fkul4-5.fna&_nc_gid=AODfzAtd7p9DqAQAiblrlE3&oh=00_AYA-xvQ1zwQv4nXNK_BhJILTo03X-IIUpGZJ_j20soLogg&oe=67C365C1",
];

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Avoid rendering on the server

  return (
    <ImagesSlider className="h-screen " images={images}>
      <div className="hidden md:flex absolute top-20 z-100 right-20">
        <CircularText
          text=" → TOMS = TOP + TRUSTED"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-left items-center"
      >
        {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p> */}
      
        <Parallax speed={-10}>
          <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-28 text-white">
            {/* Left Side (Text) */}
            <div className="text-center md:text-left max-w-2xl">
              <p className="my-5 md:hidden">→ TOMS = TOP + TRUSTED </p>

              <motion.h1 className="text-4xl md:text-6xl lg:text-7xl text-center md:text-left font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Designing your dream spaces, <br /> one room at a time
              </motion.h1>
              <motion.p className="text-lg md:text-xl mb-6">
                We specializing in transforming dreams into reality <br /> with
                innovative customization
              </motion.p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button text="Contact Us →" redirect={"/contact"} />
                <Button text="View Project →" redirect={"/projects"} />
              </div>
            </div>
          </div>
        </Parallax>
      </motion.div>
    </ImagesSlider>
    // <div
    //   className="relative pb-10 md:px-20 h-screen flex items-center justify-left bg-cover bg-center"
    //   style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    // >
    //   <div className="hidden md:flex absolute top-20 right-20">
    //     <CircularText
    //       text=" → TOMS = TOP + TRUSTED"
    //       onHover="speedUp"
    //       spinDuration={20}
    //       className="custom-class"
    //     />
    //   </div>
    //   <Parallax speed={-10}>
    //     <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-28 text-white">
    //       {/* Left Side (Text) */}
    //       <div className="text-center md:text-left max-w-2xl">
    //         <p className="my-5 md:hidden">→ TOMS = TOP + TRUSTED </p>

    //         <h1 className="text-4xl md:text-6xl lg:text-7xl text-center md:text-left font-bold mb-4">
    //           Designing your dream spaces, <br /> one room at a time
    //         </h1>
    //         <p className="text-lg md:text-xl mb-6">
    //           We specializing in transforming dreams into reality <br /> with
    //           innovative customization
    //         </p>
    //         <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
    //           <Button text="Contact Us →" redirect={"/contact"}/>
    //           <Button text="View Project →" redirect={"/projects"} />
    //         </div>
    //       </div>
    //     </div>
    //   </Parallax>
    // </div>
  );
};

export default Hero;

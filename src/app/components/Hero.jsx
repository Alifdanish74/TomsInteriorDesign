"use client";
import { Parallax } from "react-scroll-parallax";
import Button from "./Button";
import { useEffect, useState } from "react";
import CircularText from "../../components/ui/circular-text";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../../components/ui/images-slider";

const images = [
  "https://scontent.fkul3-4.fna.fbcdn.net/v/t51.75761-15/470307316_18050017808494799_2028826133029238536_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wzG8qG2Tz8AQ7kNvgH8f1ig&_nc_oc=Adg1lbnKM_mLOlQTkZDgSBzdb2MMOQJpaNeTv4jO1hlL3KDzHdAAoBvyINuK2gCDuXh-h-SVbNJjbpBxJwBPYean&_nc_zt=23&_nc_ht=scontent.fkul3-4.fna&_nc_gid=AlfrcrOyuZ9EQ_E0twESkqc&oh=00_AYDBhjHH7O4oACP9ZlxzW7ail2lipup2MN4-Lah069io_w&oe=67C88707",
  "https://scontent.fkul3-3.fna.fbcdn.net/v/t39.30808-6/386337763_360929846268756_7183735228321829763_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yupW46rsEUMQ7kNvgGKfot_&_nc_oc=AdjTlkw-m60FRvrk8pnr7WsZ08jX_pIEEd_PnyKVze9g9JgXbsJuJj4Ago2d3G1pLx7ETcxnnxRlB3tM7KvCOAfq&_nc_zt=23&_nc_ht=scontent.fkul3-3.fna&_nc_gid=A6e-NC4de88fgJxiz0NzayZ&oh=00_AYDXkeed4wXR_M3cw8diQ_-2LmWx1xH9SAeRPCt2vvQYng&oe=67C88BA8",
  "https://scontent.fkul3-3.fna.fbcdn.net/v/t39.30808-6/480447100_962884575940798_6187364374756045761_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xC_FpC3EIc4Q7kNvgGOG-Ao&_nc_oc=AdiFq0LR1BQk8NNHsLkL8k47SJxL0IrZeq2JG9PfuuWYCW5la0pqjcLGN2TdON_wyqWWel7P5MnTif8V8RREQcjU&_nc_zt=23&_nc_ht=scontent.fkul3-3.fna&_nc_gid=AhWO98clAHbg9QMMtzYsLra&oh=00_AYBP_7K1J0hrhASeNkQn_AddgvyokSFtdO8bLliniLy2rA&oe=67C8AFEE",
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
          text=" → Designing → Your → Desires"
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
          duration: 1.2,
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
              <p className="my-5 md:hidden">→Designing Your Desires </p>

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

    
    
  );
};

export default Hero;

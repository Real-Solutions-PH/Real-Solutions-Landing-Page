"use client";

import { motion } from "framer-motion";
import { HeroContent } from "./HeroContent";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative content-center items-center box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-screen min-h-[600px] justify-center gap-y-8 w-full z-[1] overflow-hidden px-6 md:px-12 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-[4] w-full flex justify-center max-w-[1240px]"
      >
        <HeroContent />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-[-47px] box-border caret-transparent brightness-[0.69] grayscale-[1] invert-[1] shrink-0 right-[-177px] top-[-238px] z-[2] -left-44 pointer-events-none"
      >
        <video
          src="https://framerusercontent.com/assets/aMPvRVYHFQxBoB0v2qyJln83jI.mp4"
          loop
          muted
          playsInline
          autoPlay
          className="box-border caret-transparent h-full object-cover w-full"
        ></video>
      </motion.div>
      <div className="absolute bg-[radial-gradient(50%_50%,rgba(255,255,255,0)_0%,rgb(255,255,255)_100%)] box-border caret-transparent shrink-0 z-[3] overflow-hidden inset-0 pointer-events-none"></div>
    </section>
  );
};

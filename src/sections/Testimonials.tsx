"use client";
import Meta from "@/assets/meta.svg";
import BoxReveal from "@/components/BoxReveal";
import Button from "@/components/Button";
import Image from "next/image";
import log from "@/assets/logo-acme.png";
import Logm from "@/assets/logom.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Testimonials = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  return (
    <section ref={containerRef}>
      <div className="container mx-auto px-4 -tracking-tight flex flex-wrap">
        <div className="pl-10 h-full w-full max-w-xl items-center justify-center overflow-hidden pt-8 flex-1">
          <BoxReveal boxColor={"grey"} duration={0.5}>
            <motion.span
              animate={isInView ? { backgroundPositionX: ["0%", "150%", "200%"] } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              }}
              className="md:text-[3.5rem] sm:text-[2.5rem] font-semibold [background-size:200%] bg-gradient-to-r from-white via-gray-600 to-white bg-clip-text text-transparent"
            >
              Llama 3.1b<span className="text-white/50"></span>
            </motion.span>
          </BoxReveal>

          <BoxReveal boxColor={"grey"} duration={0.5}>
            <motion.h2
              className="mt-[.5rem] text-[1rem]"
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              UI library for{" "}
              <span className="text-white/50">Design Engineers</span>
            </motion.h2>
          </BoxReveal>

          <BoxReveal boxColor={"grey"} duration={0.5}>
            <motion.div
              className="mt-[1.5rem]"
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg">
                -&gt; 20+ free and open-source animated components built with
                <span className="font-semibold text-white/60"> React</span>,
                <span className="font-semibold text-white/60"> Typescript</span>,
                <span className="font-semibold text-white/60"> Tailwind CSS</span>,
                and
                <span className="font-semibold text-white/60"> Framer Motion</span>
                . <br />
                -&gt; 100% open-source, and customizable. <br />
              </p>
            </motion.div>
          </BoxReveal>

          <div className="py-5">
            <BoxReveal boxColor={"grey"} duration={0.5}>
              <motion.div
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Button>Explore</Button>
              </motion.div>
            </BoxReveal>
          </div>
        </div>

        <motion.div
          initial={{
            filter: "blur(10px)",
            x: "200px",
            opacity: 0,
          }}
          animate={isInView ? { filter: "blur(0px)", x: "0px", opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center flex-1 p-8"
        >
          <Logm className="md:h-[300px] md:w-[300px] sm:h-[280px] sm:w-[280px] lg:h-[350px] lg:w-[350px] object-contain " />
        </motion.div>
      </div>
    </section>
  );
};

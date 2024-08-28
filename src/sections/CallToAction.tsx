"use client";

import Button from "@/components/Button";
import starbg from "@/assets/stars.png";
import gridLine from "@/assets/grid-lines.png";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [to]);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const borderedRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const [mouseX, mouseY] = useRelativeMousePosition(borderedRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section ref={sectionRef} className="py-20 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={borderedRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          style={{
            backgroundImage: `url(${starbg.src})`,
            backgroundPositionY,
          }}
        >
          <div
            className="absolute inset-0 bg-gray-300 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{ backgroundImage: `url(${gridLine.src})` }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-gray-300 bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{ backgroundImage: `url(${gridLine.src})`, maskImage }}
          ></motion.div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-center text-lg text-white/70 md:text-xl max-w-xs mx-auto px-4 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join the waiting list</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

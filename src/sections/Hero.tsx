"use client";
import Button from "@/components/Button";
import starbg from "@/assets/stars.png";
import { motion,useMotionTemplate,useMotionValue,useMotionValueEvent,useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const sectionRef=useRef(null);
  const {scrollYProgress}=useScroll({
    target:sectionRef,
    offset:['start end','end start']
  })
  useMotionValueEvent(scrollYProgress,"change",(value)=>{
    console.log(value);
  })
  const backgroundPositionY=
  useTransform(scrollYProgress,[0,1],[-300,300]);
  return (
    <motion.section
    ref={sectionRef}
      className="min-h-screen h-[492px] md:h-[800px] flex items-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent )]"
      style={{
        backgroundImage: `url(${starbg.src})`,
        backgroundPositionY
      }}
      animate={{
        backgroundPositionX:starbg.width,

      }}
      transition={{
        repeat:Infinity,
        ease:"linear",
        duration:80
      }}
    >
      <div className="inset-0 absolute bg-[radial-gradient(75%_75%_at_center_center,rgb(140,148,150,.5)_15%,rgb(10,0,36,.5)_78%,transparent)]"></div>
      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-gray-500 top-1/2 left-1/2 rounded-full border -translate-x-1/2 -translate-y-1/2 border-white/30 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,gray_37.7%,black)] shadow-[-20px_-20px_50px_rgb(255,255,255,.5)]"></div>

      <motion.div
      style={{
        translateY:"-50%",
        translateX:"-50%"
      }}
      animate={{
        rotate:"1turn"
      }}
      transition={{
        repeat:Infinity,
        duration:30,
        ease:"linear"
      }}
      className="absolute h-[304px] w-[304px] md:h-[580px] md:w-[580px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-full absolute h-2 w-2 bg-white/50 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="rounded-full absolute h-2 w-2 bg-white/50 left-1/2 top-0 -translate-x-0 -translate-y-1/2"></div>
        <div className="rounded-full absolute h-5 w-5 border border-white/50 left-full top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <div className="rounded-full bg-white/50 h-2 w-2"></div>
        </div>
      </motion.div>
      <motion.div
      style={{
        translateX:"-50%",
        translateY:"-50%"
      }}
      animate={
        {
          rotate:"1turn"
        }
      }
      transition={{
        duration:60,
        repeat:Infinity,
        ease:"linear"
      }}
      className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-full absolute h-2 w-2 bg-white/50 left-1/2 top-full -translate-x-0 -translate-y-1/2"></div>
        <div className="rounded-full absolute h-5 w-5 border border-white/50 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <div className="rounded-full bg-white/50 h-2 w-2"></div>
        </div>
      </motion.div>

      <motion.div
      style={{
        translateX:"-50%",
        translateY:"-50%",

      }}
      animate={{
        rotate:"1turn"
      }}
      transition={{
        duration:90,
        repeat:Infinity,
        ease:"linear"
      }}
      className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="rounded-full absolute h-2 w-2 bg-white/50 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="rounded-full absolute h-2 w-2 bg-white/50 left-1/2 top-0 -translate-x-0 -translate-y-1/2"></div>
        
      </motion.div>

      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(108,111,115))] text-transparent bg-clip-text text-center">
          Sector
        </h1>
        {/* <motion.h1
          className="text-8xl font-semibold tracking-tighter text-transparent bg-clip-text text-center bg-white/120"
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: ['100% 100%', '0% 0%'] }}
          transition={{
            duration: 5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            backgroundImage: 'radial-gradient(100% 100% at top left, white, white, rgba(108,111,115,0.5))',
            backgroundSize: '200% 200%'
          }}
        >
          Sector
        </motion.h1> */}
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center">
          Elevate your site's visibility effortlessly with AI where smart technology meets user-friendly
        </p>
        <div className="flex justify-center mt-4">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};

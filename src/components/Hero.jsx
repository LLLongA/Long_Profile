import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/long.jpg";
import { delay, motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const formattedText = HERO_CONTENT.split("\n").map((line, index) => (
  <p key={index} className="mb-4">
    {line}
  </p>
));

const motion_rl = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className=" bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-500
              bg-clip-text pb-14 text-4xl font-bold tracking-tight lg:mt-16
          lg:text-4xl text-transparent"
            >
              Long Chen
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
          bg-clip-text text-3xl tracking-tighter text-transparent"
            >
              Front End Developer | Product Manager
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6"
            >
              {formattedText}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <motion.img
              className="rounded-md"
              variants={motion_rl(1.5)}
              initial="hidden"
              animate="visible"
              src={profilePic}
              alt="Long Chen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

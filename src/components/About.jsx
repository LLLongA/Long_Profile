import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { motion_lr, motion_rl } from "../motionVariants";

const About = () => {
  const formattedText = ABOUT_TEXT.split("\n").map((line, index) => (
    <p key={index} className="mb-4">
      {line}
    </p>
  ));

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        variants={motion_lr(0.5)}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl"
      >
        About
        <motion.span
          variants={motion_rl(0.5)}
          initial="hidden"
          whileInView="visible"
          className="text-neutral-500"
        >
          {" "}
          Me
        </motion.span>
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              variants={motion_lr(1)}
              initial="hidden"
              whileInView="visible"
              className="rounded-2xl"
              src={aboutImg}
              alt="about"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.div
              variants={motion_lr(1)}
              initial="hidden"
              whileInView="visible"
              className="my-2 max-w-xl py-6"
            >
              {formattedText}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

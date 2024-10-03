import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { motion_lr, motion_rl } from "../motionVariants";

const Contact = () => {
  return (
    <div className="border-r border-neutral-900 pb-20">
      <motion.h1
        variants={motion_rl(1)}
        initial="hidden"
        whileInView="visible"
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          variants={motion_lr(1)}
          initial="hidden"
          whileInView="visible"
          className="my-4"
        >
          {CONTACT.email}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;

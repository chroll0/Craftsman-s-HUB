import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

type SectionWrapperProps = {
  Component: string;
  idName: string;
};

const SectionWrapper = ({ Component, idName }: SectionWrapperProps) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`mx-auto relative z-0`}
      >
        <span className="" id={idName}>
          &nbsp; {/* empty space */}
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import StarWrapper from "./hoc/sectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col items-center "
        >
        <img src={icon} alt={title} className="w-16 object-contain "/>
        <h3 className="text-white  text-[20px] font-bold text-center">{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       
        Hello, my name is Amit and I'm a skilled and ambitious software developer with a passion for creating innovative and user-friendly applications. With my background in computer science and experience working on a range of projects, I have developed a strong understanding of programming languages, frameworks, and best practices. My goal is to continue learning and growing as a developer, and to create software that makes a positive impact on people's lives. I'm always open to new challenges and opportunities, and I'm excited to showcase my work and skills through this portfolio.
      </motion.p>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default StarWrapper(About,"about") ;

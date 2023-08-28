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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
        corrupti, consectetur quis aut quae reprehenderit voluptatem dolore,
        enim dolor voluptates obcaecati provident distinctio debitis nulla
        veniam totam atque, similique nostrum. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Facere accusantium architecto veritatis
        earum molestiae nisi mollitia aliquam dolor suscipit vel? Molestias,
        aliquid odit? Dignissimos temporibus mollitia quo, tempora cumque earum!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default StarWrapper(About,"about") ;

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "circOut" } },
  };

  const spanVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "backOut", delay: 0.3 } },
  };

  const lineBorderVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const linesVariants = {
    hidden: { height: 0 },
    visible: { height: "400px", transition: { duration: 1.2, ease: "easeInOut" } },
  };

  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <motion.div
            className="hero-line"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ minHeight: "400px" }}
          >
            <motion.div
              className="hero-line-border"
              variants={lineBorderVariants}
            ></motion.div>
            <motion.div
              className="hero-lines"
              variants={linesVariants}
              transition={{ delay: 0.4 }}
            ></motion.div>
          </motion.div>
          <motion.div
            className="hero-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textVariants}
          >
            <h1>
              Добро пожаловать в <br /> <motion.span variants={spanVariants}>TurboDevs</motion.span>
            </h1>
            <motion.h5
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={textVariants}
              transition={{ delay: 0.5 }}
            >
              Мы разрабатываем передовые
              <br />
              программные продукты для вашего бизнеса
            </motion.h5>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
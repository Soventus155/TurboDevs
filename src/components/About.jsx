import React from "react";
import { motion } from "framer-motion";
import onas from "../assets/img/png/onas.png";

const About = () => {
  const imgVariants = {
    hidden: { opacity: 0, x: -150, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease: "backOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 100, rotate: 5 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8, ease: "circOut" } },
  };

  return (
    <div id="about">
      <div className="container">
        <div className="about">
          <h1 className="title_component">О нас</h1>
          <h3>
            Мы предлагаем инновационные решения, <br />
            которые трансформируют бизнес и вдохновляют на рост
          </h3>
          <div className="about-block">
            <motion.div
              className="about-img"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={imgVariants}
            >
              <img src={onas} alt="Команда TurboDevs" />
            </motion.div>
            <motion.div
              className="about-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={textVariants}
            >
              <p>
                TurboDevs — креативная IT-команда, которая усиливает ваш бизнес
                с помощью передовых технологий. Мы разрабатываем веб-сайты,
                мобильные приложения и программные продукты с высоким качеством
                и скоростью. Каждый проект для нас — это уникальное,
                эффективное и инновационное решение.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
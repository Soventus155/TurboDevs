import React from "react";
import { FaBolt, FaThumbsUp, FaHeadset, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaBolt />,
    title: "Скорость",
    desc: "Запускаем проекты в кратчайшие сроки без потери качества.",
  },
  {
    icon: <FaThumbsUp />,
    title: "Качество",
    desc: "Пишем чистый, поддерживаемый код и следуем лучшим практикам.",
  },
  {
    icon: <FaHeadset />,
    title: "Поддержка",
    desc: "Остаёмся на связи и после завершения проекта.",
  },
  {
    icon: <FaLightbulb />,
    title: "Индивидуальный подход",
    desc: "Каждое решение создаём под задачи вашего бизнеса.",
  },
];

const WhyUs = () => {
  const cardVariants = [
    { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } },
    { hidden: { opacity: 0, y: 50, rotate: -5 }, visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.9, ease: "circOut" } } },
    { hidden: { opacity: 0, x: 100, scale: 0.9 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: "backOut" } } },
    { hidden: { opacity: 0, y: -50, skewX: 5 }, visible: { opacity: 1, y: 0, skewX: 0, transition: { duration: 0.85, ease: "anticipate" } } },
  ];

  return (
    <section className="whyus-section">
      <div className="container">
        <h1 className="title_component">Почему мы?</h1>
        <div className="whyus-grid">
          {features.map((feature, i) => (
            <motion.div
              className="whyus-card"
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants[i % cardVariants.length]}
            >
              <div className="whyus-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
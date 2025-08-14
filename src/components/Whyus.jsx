// WhyUs.jsx
import React from "react";
import { FaBolt, FaThumbsUp, FaHeadset, FaLightbulb } from "react-icons/fa";

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
  return (
    <section className="whyus-section">
      <div className="whyus-container">
        <h2>Почему мы?</h2>
        <div className="whyus-grid">
          {features.map((feature, i) => (
            <div className="whyus-card" key={i}>
              <div className="whyus-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Price = () => {
  const planVariants = [
    { hidden: { opacity: 0, x: -150 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } },
    { hidden: { opacity: 0, y: 100, rotate: -5 }, visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.9, ease: "circOut" } } },
    { hidden: { opacity: 0, x: 150, scale: 0.9 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: "backOut" } } },
  ];

  return (
    <div id="price">
      <div className="container">
        <motion.div
          className="price-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="title_name">Тарифные планы</h1>
          <h3>Выберите свой <span>идеальный план</span></h3>
        </motion.div>
        <div className="plans-container">
          <motion.div
            className="timeline"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          ></motion.div>
          <motion.div
            className="plan top"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={planVariants[0]}
          >
            <div className="plan-content">
              <p>Базовый</p>
              <h2>999 $ / проект</h2>
              <ul>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> 5-страничный адаптивный сайт</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Базовая SEO-оптимизация</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Интеграция формы обратной связи</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Мобильный дизайн</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Функциональность e-commerce</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Подключательские анимации</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="plan middle"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={planVariants[1]}
          >
            <div className="plan-content">
              <p>Профессиональный</p>
              <h2>2499 $ / проект</h2>
              <ul>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> 10-страничный кастомный сайт</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Расширенная SEO-оптимизация</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Система управления контентом</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Интеграция с социальными сетями</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Базовый e-commerce (до 20 продуктов)</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Продвинутые функции e-commerce-приложений</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="plan bottom"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={planVariants[2]}
          >
            <div className="plan-content">
              <p>Корпоративный</p>
              <h2>4999 $ / проект</h2>
              <ul>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> 20+ страничный кастомный сайт</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Премиум SEO и аналитика</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Расширенная функциональность e-commerce</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Подключательские функции веб-приложений</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Расширенный анимации и взаимодействия</li>
                <li><FaRegCheckCircle color="#00c3ff" size={20} /> Внедрение менеджер проекта</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Price;
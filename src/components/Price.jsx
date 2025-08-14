import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Price = () => {
  return (
    <div id="price">
      <div className="container">
        <div className="price">
          <h1>Тарифные планы</h1>
          <h3>Выберите свой <span>идеальный план</span></h3>
        </div>
        <div className="plans-container">
          <div className="timeline"></div>
          <div className="plan top">
            <div className="plan-content">
              <p>Базовый</p>
              <h2>999 $ / проект</h2>
              <ul>
                <li><FaRegCheckCircle color="#006aff" size={20} /> 5-страничный адаптивный сайт</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Базовая SEO-оптимизация</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Интеграция формы обратной связи</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Мобильный дизайн</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Функциональность e-commerce</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Подключательские анимации</li>
              </ul>
            </div>
          </div>
          <div className="plan middle">
            <div className="plan-content">
              <p>Профессиональный</p>
              <h2>2499 $ / проект</h2>
              <ul>
                <li><FaRegCheckCircle color="#006aff" size={20} /> 10-страничный кастомный сайт</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Расширенная SEO-оптимизация</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Система управления контентом</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Интеграция с социальными сетями</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Базовый e-commerce (до 20 продуктов)</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Продвинутые функции e-commerce-приложений</li>
              </ul>
            </div>
          </div>
          <div className="plan bottom">
            <div className="plan-content">
              <p>Корпоративный</p>
              <h2>4999 $ / проект</h2>
              <ul>
                <li><FaRegCheckCircle color="#006aff" size={20} /> 20+ страничный кастомный сайт</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Премиум SEO и аналитика</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Расширенная функциональность e-commerce</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Подключательские функции веб-приложений</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Расширенный анимации и взаимодействия</li>
                <li><FaRegCheckCircle color="#006aff" size={20} /> Внедрение менеджер проекта</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
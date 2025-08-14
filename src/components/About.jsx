import React from "react";
import onas from "../assets/img/png/onas.png";
const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about">
          <h1>О нас</h1>
          <h3>Мы предлагаем инновационные решения, <br /> которые трансформируют бизнес и стимулируют рост</h3>
          <div className="about-block">
            <div className="about-img">
              <img src={onas} alt="" />
            </div>
            <div className="about-text">
              <p>
                TurboDevs — креативная IT-команда, которая усиливает ваш бизнес
                с помощью технологий. Мы создаем веб-сайты, мобильные приложения
                и программные продукты быстро и качественно. Каждый проект для
                нас — это уникальное, эффективное и инновационное решение.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

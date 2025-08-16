import React from "react";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-box">
        <p className="contact-subtitle">СВЯЖИТЕСЬ С НАМИ</p>
        <h1 className="contact-title">Контакты.</h1>

        <label className="contact-label">Ваше имя</label>
        <input type="text" placeholder="Как вас зовут?" className="contact-input" />

        <label className="contact-label">Ваш номер телефона</label>
        <div className="contact-phone-input">
          <span className="flag">🇰🇬 +996</span>
          <input type="tel" placeholder="" />
        </div>

        <label className="contact-label">Ваше сообщение</label>
        <textarea placeholder="Что вы хотите сказать?" className="contact-textarea"></textarea>

        <button className="contact-button">Отправить</button>
      </div>
    </div>
  );
};

export default Contact;
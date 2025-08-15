import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contacty = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_kxmy2j4",
        "template_4onxo6f",
        {
          from_name: form.name,
          to_name: "Moda",
          phone: form.phone,
          to_email: "levanbao2105@gmail.com",
          message: form.message,
        },
        "VIJ18O5pAGDlsz9eJ"
      )
      .then(() => {
        setLoading(false);
        alert("Спасибо. Я свяжусь с вами как можно скорее.");
        setForm({ name: "", phone: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Что-то пошло не так. Пожалуйста, попробуйте позже.");
      });
  };

  return (
    <div id="contacty">
      <div className="container">
        <div className="contacty">
          <h2 className="contacty-title">Контакты</h2>
          <p className="contacty-subtitle">Свяжитесь с нами</p>

          <form ref={formRef} onSubmit={handleSubmit} className="contacty-form">
            <label>
              <span>Ваше имя</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Как вас зовут?"
              />
            </label>

            <label>
              <span>Ваш номер телефона</span>
              <PhoneInput
                country={"kg"}
                value={form.phone}
                onChange={(value) => handleChange("phone", value)}
                enableSearch={true}
                inputStyle={{
                  width: "100%",
                  height: "50px",
                  fontSize: "16px",
                  backgroundColor: "#1f1f1f",
                  border: "none",
                  color: "#fff",
                  borderRadius: "8px",
                }}
                buttonStyle={{
                  border: "none",
                  backgroundColor: "#1f1f1f",
                }}
                placeholder="Введите номер телефона"
              />
            </label>

            <label>
              <span>Ваше сообщение</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Что вы хотите сказать?"
              />
            </label>

            <button type="submit">
              {loading ? "Отправка..." : "Отправить"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacty;
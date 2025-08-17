import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiLogoTiktok } from "react-icons/bi";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineMail, MdPhone } from "react-icons/md";
import { PiMapPin } from "react-icons/pi";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      y: -3,
      borderColor: "#006aff",
      boxShadow: "0 0 12px rgba(0, 106, 255, 0.7), inset 0 0 8px rgba(0, 106, 255, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      y: -5,
      boxShadow: "0 8px 25px rgba(0, 106, 255, 0.7), 0 0 15px rgba(255, 255, 255, 0.5)",
      background: "linear-gradient(45deg, #0047cc, #006aff)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
    tap: { scale: 0.95, y: 0 },
  };

  const socialMediaVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "backOut" },
    },
    hover: {
      scale: 1.3,
      y: -3,
      boxShadow: "0 6px 20px rgba(0, 106, 255, 0.6)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="contact">
      <div className="container">
        <motion.div
          className="contact-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="contact_box" variants={formVariants}>
            <motion.div className="input_box" variants={inputVariants} whileHover="hover">
              <label htmlFor="name">Имя</label>
              <input type="text" id="name" placeholder="Ваше имя" />
            </motion.div>
            <motion.div className="input_box" variants={inputVariants} whileHover="hover">
              <label htmlFor="phone">Номер телефона</label>
              <input type="tel" id="phone" placeholder="+996 (XXX) XXX-XXX" />
            </motion.div>
            <motion.div className="input_box" variants={inputVariants} whileHover="hover">
              <label htmlFor="message">Что вас интересует?</label>
              <textarea id="message" placeholder="Ваше сообщение"></textarea>
            </motion.div>
            <motion.button variants={buttonVariants} whileHover="hover" whileTap="tap">
              Отправить
            </motion.button>
          </motion.div>
          <motion.div className="contact_box_phone" variants={infoVariants}>
            <h2>Свяжитесь с нами</h2>
            <div className="company_box">
              <motion.div className="location_box" variants={inputVariants}>
                <PiMapPin size={24} color="#fff" />
                <p>Кыргызская Республика, г. Бишкек, ул. Красная 8</p>
              </motion.div>
              <motion.div className="location_box phone_block" variants={inputVariants}>
                <MdPhone size={24} color="#fff" />
                <div className="pnone_box">
                  <p>+996 (502) 800-202</p>
                  <p>+996 (502) 800-202</p>
                </div>
              </motion.div>
              <motion.div className="location_box" variants={inputVariants}>
                <MdOutlineMail size={24} color="#fff" />
                <p>turboDevs@gmail.com</p>
              </motion.div>
              <motion.div variants={inputVariants}>
                <h3>Мы в соцсетях</h3>
                <div className="social_media_block">
                  <motion.div className="social_media_box" variants={socialMediaVariants} whileHover="hover">
                    <IoLogoWhatsapp size={24} color="#006aff" />
                  </motion.div>
                  <motion.div className="social_media_box" variants={socialMediaVariants} whileHover="hover">
                    <FaTelegramPlane size={24} color="#006aff" />
                  </motion.div>
                  <motion.div className="social_media_box" variants={socialMediaVariants} whileHover="hover">
                    <FaSquareInstagram size={24} color="#006aff" />
                  </motion.div>
                  <motion.div className="social_media_box" variants={socialMediaVariants} whileHover="hover">
                    <BiLogoTiktok size={24} color="#006aff" />
                  </motion.div>
                </div>
              </motion.div>
              <motion.p className="end_text" variants={inputVariants}>
                Мы здесь, чтобы помочь! Если у вас есть вопросы по технической поддержке, сотрудничеству или PR, свяжитесь с нами. Наши специалисты ответят в течение 15–60 минут в зависимости от нагрузки.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
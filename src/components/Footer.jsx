import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaSquareInstagram, FaWhatsapp } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { PiMapPin } from "react-icons/pi";
import { MdOutlineMail, MdPhone } from "react-icons/md";
import { IoLogoWhatsapp, IoMdTime } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { BiLogoTiktok } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";

const Footer = () => {
  const iconVariants = {
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
    initial: { scale: 1, rotate: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container">
        <div className="footer_block">
          <motion.div className="footer_box1" variants={fadeIn}>
            <p>Мы, компания tuboDevs, являемся полнофункциональной компанией по разработке веб-сайтов и мобильных приложений, базирующейся в Кыргызстане.
              Мы занимаемся созданием инновационных цифровых решений, которые помогают компаниям расти и достигать успеха в
              цифровой среде.</p>
            <div className="social_media_block">
              <motion.div className="social_media_box" whileHover="hover" variants={iconVariants}>
                <IoLogoWhatsapp size={24} color="#006aff" />
              </motion.div>
              <motion.div className="social_media_box" whileHover="hover" variants={iconVariants}>
                <FaTelegramPlane size={24} color="#006aff" />
              </motion.div>
              <motion.div className="social_media_box" whileHover="hover" variants={iconVariants}>
                <FaSquareInstagram size={24} color="#006aff" />
              </motion.div>
              <motion.div className="social_media_box" whileHover="hover" variants={iconVariants}>
                <BiLogoTiktok size={24} color="#006aff" />
              </motion.div>
              <motion.div className="social_media_box" whileHover="hover" variants={iconVariants}>
                <GrFacebookOption size={24} color="#006aff" />
              </motion.div>
            </div>
          </motion.div>
          <div className="footer_box2">
            <div className="block_links">
              <h3>Быстрые ссылки</h3>
              {["Услуги", "О нас", "Почему мы?", "Прайс", "Контакты"].map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <NavLink className="nav-links">{link}</NavLink>
                </motion.div>
              ))}
            </div>
            <div className="block_links">
              <h3>Свяжитесь с нами</h3>
              <motion.div
                className="contact_box_ff"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <PiMapPin size={30} color="#006aff" />
                <p>Кыргызская Республика, г. Бишкек, ул. Красная 8</p>
              </motion.div>
              <motion.div
                className="contact_box_ff"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <MdPhone size={24} color="#006aff" />
                <div className="pnone_box">
                  <p>+996 (555) 922-522</p>
                </div>
              </motion.div>
              <motion.div
                className="contact_box_ff"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <MdOutlineMail size={24} color="#006aff" />
                <p>turboDevs@gmail.com</p>
              </motion.div>
              <motion.div
                className="contact_box_ff"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <IoMdTime size={24} color="#006aff" />
                <p>Понедельник - суббота: 10:00 - 19:00</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
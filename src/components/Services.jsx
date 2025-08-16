import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { RiSettings5Fill } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
import { FaCogs } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

const Services = () => {
    const serviceVariants = [
        { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } },
        { hidden: { opacity: 0, y: 50, rotate: -5 }, visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 1, ease: "circOut" } } },
        { hidden: { opacity: 0, x: 100, scale: 0.8 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease: "backOut" } } },
        { hidden: { opacity: 0, y: -50, rotate: 5 }, visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.7, ease: "easeInOut" } } },
        { hidden: { opacity: 0, x: -100, skewX: 10 }, visible: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.85, ease: "anticipate" } } },
        { hidden: { opacity: 0, x: 100, scale: 0.9 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.75, ease: "easeInOut" } } },
    ];

    return (
        <div id="services">
            <div className="container">
                <h1 className="title_component">Наши услуги</h1>
                <div className="services_block">
                    <motion.div
                        className="services_box"
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={serviceVariants[0]}
                    >
                        <div className="service_icon_title">
                            <FaMobileAlt color="#006aff" />
                            <h3>Мобильные Приложения</h3>
                        </div>
                        <p>Разрабатываем уникальные мобильные приложения для платформ iOS и Android, которые полностью соответствуют потребностям вашего бизнеса и способствуют его развитию.</p>
                    </motion.div>
                    <motion.div
                        className="services_box"
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={serviceVariants[1]}
                    >
                        <div className="service_icon_title">
                            <MdWeb color="#006aff" />
                            <h3>Landing Page / Сайт-Визитка</h3>
                        </div>
                        <p>Создаем привлекательные и эффективные одностраничные сайты, которые захватывают внимание посетителей и помогают достичь ваших бизнес-целей.</p>
                    </motion.div>
                    <motion.div
                        className="services_box"
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={serviceVariants[2]}
                    >
                        <div className="service_icon_title">
                            <RiSettings5Fill color="#006aff" />
                            <h3>Корпоративный Вебсайт</h3>
                        </div>
                        <p>Разрабатываем профессиональные вебсайты, которые укрепляют имидж вашей компании, привлекают новых клиентов и повышают доверие.</p>
                    </motion.div>
                    <motion.div
                        className="services_box"
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={serviceVariants[3]}
                    >
                        <div className="service_icon_title">
                            <GiShoppingCart color="#006aff" />
                            <h3>Интернет-Магазин</h3>
                        </div>
                        <p>Создаем функциональные и удобные онлайн-магазины, которые увеличивают продажи, обеспечивают отличный опыт покупок и способствуют росту вашего бизнеса.</p>
                    </motion.div>
                    <motion.div
                        className="services_box"
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={serviceVariants[4]}
                    >
                        <div className="service_icon_title">
                            <FaCogs color="#006aff" />
                            <h3>Техническая Поддержка</h3>
                        </div>
                        <p>Обеспечиваем стабильную работу вашего сайта, предлагаем круглосуточную техническую поддержку и помогаем вашему бизнесу успешно развиваться в онлайн-пространстве.</p>
                    </motion.div>
                    <motion.div
                        className="services_box"
                        custom={5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={serviceVariants[5]}
                    >
                        <div className="service_icon_title">
                            <FiSearch color="#006aff" />
                            <h3>SEO-Оптимизация</h3>
                        </div>
                        <p>Повышаем видимость вашего сайта в поисковых системах, привлекаем больше целевой аудитории и помогаем обойти конкурентов в интернете.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Services;
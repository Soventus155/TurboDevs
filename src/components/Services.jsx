import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { RiSettings5Fill } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
import { FaCogs } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <h1>Наши услуги</h1>
                <div className="services_block">
                    <div className="services_box">
                        <div className="service_icon_title">
                            <FaMobileAlt color="#006aff" />
                            <h3>Мобильные Приложения</h3>
                        </div>
                        <p>Разрабатываем уникальные мобильные приложения для платформ iOS и Android, которые полностью соответствуют потребностям вашего бизнеса и способствуют его развитию.</p>
                    </div>
                    <div className="services_box">
                        <div className="service_icon_title">
                            <MdWeb color="#006aff" />
                            <h3>Landing Page / Сайт-Визитка</h3>
                        </div>
                        <p>Создаем привлекательные и эффективные одностраничные сайты, которые захватывают внимание посетителей и помогают достичь ваших бизнес-целей.</p>
                    </div>
                    <div className="services_box">
                        <div className="service_icon_title">
                            <RiSettings5Fill color="#006aff" />
                            <h3>Корпоративный Вебсайт</h3>
                        </div>
                        <p>Разрабатываем профессиональные вебсайты, которые укрепляют имидж вашей компании, привлекают новых клиентов и повышают доверие.</p>
                    </div>
                    <div className="services_box">
                        <div className="service_icon_title">
                            <GiShoppingCart color="#006aff" />
                            <h3>Интернет-Магазин</h3>
                        </div>
                        <p>Создаем функциональные и удобные онлайн-магазины, которые увеличивают продажи, обеспечивают отличный опыт покупок и способствуют росту вашего бизнеса.</p>
                    </div>
                    <div className="services_box">
                        <div className="service_icon_title">
                            <FaCogs color="#006aff" />
                            <h3>Техническая Поддержка</h3>
                        </div>
                        <p>Обеспечиваем стабильную работу вашего сайта, предлагаем круглосуточную техническую поддержку и помогаем вашему бизнесу успешно развиваться в онлайн-пространстве.</p>
                    </div>
                    <div className="services_box">
                        <div className="service_icon_title">
                            <FiSearch color="#006aff" />
                            <h3>SEO-Оптимизация</h3>
                        </div>
                        <p>Повышаем видимость вашего сайта в поисковых системах, привлекаем больше целевой аудитории и помогаем обойти конкурентов в интернете.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
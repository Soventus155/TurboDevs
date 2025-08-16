import React from "react";
import Fon from "./fon/Fon";
import Services from "./Services";
import About from "./About";
import Price from "./Price";
import Whyus from "./Whyus";
import Contact from "./Contact";


const Main = () => {
    return (
        <div className="main">
            <Services />
            <About />
            <Whyus />
            <Price />
            <Contact />
        </div>
    )
}

export default Main;
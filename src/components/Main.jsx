import React from "react";
import Fon from "./fon/Fon";
import Services from "./Services";
import About from "./About";
import Price from "./Price";
import Whyus from "./Whyus";
import Contact from "./Contact";
import Icons from "./Icons";


const Main = () => {
    return (
        <div className="main">
            <Services />
            <About />
            <Whyus />
            <Price />
            <Contact />
            <Icons/>
        </div>
    )
}

export default Main;
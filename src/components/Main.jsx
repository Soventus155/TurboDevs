import React from "react";
import Fon from "./fon/Fon";
import Services from "./Services";
import About from "./About";
import Price from "./Price";
import Whyus from "./Whyus";
import Contacty from "./Contacty";


const Main = () => {
    return(
        <div className="main">
            <Services/>
            <About/>
            <Whyus/>
            <Price/>
            <Contacty/>
        </div>
    )
}

export default Main;
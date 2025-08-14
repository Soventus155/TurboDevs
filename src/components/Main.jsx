import React from "react";
import Fon from "./fon/Fon";
import Services from "./Services";
import About from "./About";
import Price from "./Price";


const Main = () => {
    return(
        <div className="main">
            <Services/>
            <About/>
            <Price/>
        </div>
    )
}

export default Main;
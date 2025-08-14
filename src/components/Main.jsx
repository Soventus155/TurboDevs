import React from "react";
import Fon from "./fon/Fon";
import Services from "./Services";
import About from "./About";


const Main = () => {
    return(
        <div className="main">
            <Services/>
            <About/>
        </div>
    )
}

export default Main;
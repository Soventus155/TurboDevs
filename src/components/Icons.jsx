import React from "react";
import javascript_logo from "../assets/img/svg/javascript_logo.svg"
import pthon_logo from "../assets/img/svg/python_logo.svg"
import sqlsever_logo from "../assets/img/svg/sqlserver_logo.svg"
import figma_logo from "../assets/img/svg/figma_logo.svg"
import visualstudiocode from "../assets/img/svg/visualstudiocode_logo.svg"
import css_logo from "../assets/img/svg/css_logo.svg"
import html_logo from "../assets/img/svg/html_logo.svg"
import github_logo from "../assets/img/svg/github_logo.svg"
import django_logo from "../assets/img/svg/django_logo.svg"
import react_logo from "../assets/img/svg/react_logo.svg"
import react_logo2 from "../assets/img/svg/react_logo.svg"
import nextjs_logo from "../assets/img/svg/nextjs_logo.svg"
import postman_logo from "../assets/img/svg/postman_logo.svg"
import pycharm_logo from "../assets/img/svg/pycharm_logo.svg"
import webstorm_logo from "../assets/img/svg/webstorm_logo.svg"
import api_logo from "../assets/img/svg/api_logo.svg"
const Icons = () => {
  return (
    <div id="icons">
      <div className="container">
        <div className="icons">
          <div className="icons-block">
            <img src={javascript_logo} alt="" />
            <span>Java Script</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={pthon_logo} alt="" />
            <span>Python</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={sqlsever_logo} alt="" />
            <span>SQL</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={figma_logo} alt="" />
            <span>Figma</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={visualstudiocode} alt="" />
            <span>Vscode</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={css_logo} alt="" />
            <span>CSS</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={html_logo} alt="" />
            <span>HTML</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={github_logo} alt="" />
            <span>GitHub</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={django_logo} alt="" />
            <span>Django</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={react_logo} alt="" />
            <span>React JS</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={react_logo2} alt="" />
            <span>React JS</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={nextjs_logo} alt="" />
            <span>Next JS</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={postman_logo} alt="" />
            <span>Postmen</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={pycharm_logo} alt="" />
            <span>PyCharm</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={webstorm_logo} alt="" />
            <span>Webstorm</span>
          </div>
          <div className="icons-block">
            <img className="bgr" src={api_logo} alt="" />
            <span>API</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;

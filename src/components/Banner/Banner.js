import React from "react";
import style from "./Banner.module.css";
import scroll from "../../assets/landing-assets/scroll.svg";

function Banner() {
  return (
    <>
      <div id="main" className={`main d-flex justify-content-center align-content-center ${style.main}`}>
        <div className="main-container d-flex justify-content-center align-content-center flex-column">
          <h1 className="main-title text-center fw-bold text-white mb-5 display-3">PLAY TRADITIONAL GAME</h1>
          <h3 className="main-text text-center fs-2 text-white px-2 mb-5">Experience new traditional game play</h3>
          <div className="d-flex justify-content-center align-content-center mt-4">
            <button className={`btn btn-lg text-nowrap ${style.btn}`} type="button">
              <strong>PLAY NOW</strong>
            </button>
          </div>
          <div className={`main-scroll d-flex flex-column justify-content-center align-content-center ${style.scroll}`}>
            <a className="text-decoration-none" href="#about">
              <p className="main-scroll-text fs-6 fw-bold text-center text-white mb-1">THE STORY</p>
              <img className={`main-scroll-btn mb-5 ${style.img}`} src={scroll} alt="scroll" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

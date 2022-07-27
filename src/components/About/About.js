import React from "react";
import style from "./About.module.css";
import gameOne from "../../assets/landing-assets/rockpaperstrategy-1600.png";

function About() {
  return (
    <>
      <div id="about" className={`${style.about}`}>
        <h3 className="about-text text-white mb-2">What's so special?</h3>
        <div className="about-container">
          <div className="row">
            <div className="about-banner col-lg-4">
              <h1 className="about-title text-white mb-5 display-2">THE GAMES</h1>
            </div>
            <div className="about-carousel col-lg-8">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={gameOne} className="d-block w-100" alt="rockpaperstrategy-1600" />
                  </div>
                  <div className="carousel-item">
                    <img src={gameOne} className="d-block w-100" alt="rockwin" />
                  </div>
                  <div className="carousel-item">
                    <img src={gameOne} className="d-block w-100" alt="scissorswin" />
                  </div>
                  <div className="carousel-item">
                    <img src={gameOne} className="d-block w-100" alt="paperwin" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

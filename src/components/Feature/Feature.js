import React from "react";
import style from "./Feature.module.css";

function Feature() {
  return (
    <>
      <div id="features" className={`${style.features}`}>
        <div className="features-container">
          <div className="row">
            <div className="col-sm-2 col-md-3 col-lg-6 col-xl-7"></div>
            <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <h1 className={`features-title fs-2 text-white mb-2 ${style.title}`}>What's so special?</h1>
              <h3 className={`features-text text-white mb-5 pb-4 display-2 ${style.sub}`}>FEATURES</h3>
              <ul className="custom-marker ps-3">
                <li>
                  <div className={`first pb-5 ${style.first}`}>
                    <h2 className="features1 ms-4 fs-3 text-warning mb-4">TRADITIONAL GAMES</h2>
                    <p className={`features1-detail ms-4 ${style.text}`}>If you miss your childhood, we provide many traditional games here</p>
                  </div>
                </li>
                <li>
                  <h2 className="features2 ms-4 fs-3 text-warning mb-5">GAME SUIT</h2>
                </li>
                <li>
                  <h2 className="features3 ms-4 fs-3 text-warning">TBD</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;

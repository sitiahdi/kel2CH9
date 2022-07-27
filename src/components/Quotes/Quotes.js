import React from "react";
import style from "./Quotes.module.css";
import twitter from "../../assets/landing-assets/twitter.svg";
import photo1 from "../../assets/landing-assets/photo1.png";
import photo2 from "../../assets/landing-assets/photo2.png";
import photo3 from "../../assets/landing-assets/photo3.png";

function Quotes() {
  return (
    <>
      <div id="quotes" className={`quotes ${style.quotes}`}>
        <div className="quotes-container">
          <div className="row">
            <div className="col-lg-5 p-5 d-flex flex-column justify-content-center align-content-center">
              <div className={style.banner}>
                <h3 className="features-text text-white text-nowrap mb-4 display-2">TOP SCORES</h3>
                <p className={style.quotesp}>This top score from various games provided on this platform</p>
                <button className={`btn btn-lg mt-4 ${style.btn}`} type="button">
                  <strong>see more</strong>
                </button>
              </div>
            </div>
            <div className={`card-container col-lg-5 offset-lg-1 ${style.container}`}>
              <div className="row">
                <div className="col-sm-5 offset-lg-3 mb-4">
                  <div className={style.card}>
                    <div className="card-header mb-0 pb-0 d-flex flex-row align-content-center justify-content-between">
                      <div className="card-header1 d-flex flex-row">
                        <img className={style.photo} src={photo1} alt="photo1" />
                        <div className={style.shadow}></div>
                        <div className="card-header-text d-flex flex-column justify-content-center align-content-center ps-4">
                          <h3 className={style.header}>Evan Lahti</h3>
                          <p className={style.headerp}>PC Gamer</p>
                        </div>
                      </div>
                      <img className={style.icon} src={twitter} alt="twitter" />
                    </div>
                    <div className={`card-body mt-0 pt-3 mb-xl-2 ${style.cardbody}`}>
                      <h6 className={style.body}>“One of my gaming highlights of the year.”</h6>
                      <p className={style.bodyp}>June 18, 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5 mb-4">
                  <div className={style.card}>
                    <div className="card-header mb-0 pb-0 d-flex flexgi-row align-content-center justify-content-between">
                      <div className="card-header1 d-flex flex-row">
                        <img className={style.photo} src={photo2} alt="photo1" />
                        <div className={style.shadow}></div>
                        <div className="card-header-text ps-4">
                          <h3 className={style.header}>Jada Griffin</h3>
                          <p className={style.headerp}>Nerdreactor</p>
                        </div>
                      </div>
                      <img className={style.icon} src={twitter} alt="twitter" />
                    </div>
                    <div className="card-body mt-0 pt-2">
                      <h6 className={style.body}>“The next big thing in the world of streaming and survival games.”</h6>
                      <p className={style.bodyp}>June 10, 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5 offset-lg-3">
                  <div className={style.card}>
                    <div className="card-header mb-0 pb-0 d-flex flex-row align-content-center justify-content-between">
                      <div className="card-header1 d-flex flex-row">
                        <img className={style.photo} src={photo3} alt="photo1" />
                        <div className={style.shadow}></div>
                        <div className="card-header-text d-flex flex-column justify-content-center align-content-center ps-4">
                          <h3 className={style.header}>Aaron Williams</h3>
                          <p className={style.headerp}>Uproxx</p>
                        </div>
                      </div>
                      <img className={style.icon} src={twitter} alt="twitter" />
                    </div>
                    <div className="card-body mt-0 pt-2">
                      <h6 className={style.body}>“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”</h6>
                      <p className={style.bodyp}>December 24, 2018</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quotes;

import React from "react";
import style from "./News.module.css";

function News() {
  return (
    <>
      <div id="news" className={`news ${style.news}`}>
        <div className="row">
          <div className="col-lg-6 col-md-1"></div>
          <div className="col-lg-6 col-md-10 col-sm-12">
            <h3 className={`news-title fs-2 text-white mb-3 ${style.title}`}>Want to stay in touch?</h3>
            <h3 className={`news-text text-white mb-4 display-2 ${style.text}`}>NEWSTELLER SUBSCRIBE</h3>
            <p className="text-white mb-5">
              In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don't spam.
            </p>
            <div className="news-input d-sm-flex flex-row flex-nowrap">
              <form className={`form-floating mb-3 ${style.floating}`}>
                <input type="email" className={`form-control bg-dark fs-5 text-warning ${style.control}`} id="floatingInputValue" placeholder="youremail@binar.co.id" value="youremail@binar.co.id" />
                <label for="floatingInputValue" className={`form-label ${style.label}`}>
                  Your email adress
                </label>
              </form>
              <div className={`news-btn ${style.newsbtn}`}>
                <button className={`btn btn-lg ms-sm-3 ${style.btn}`} type="button">
                  <strong>Subscribe Now</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;

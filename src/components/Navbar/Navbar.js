import React from "react";
import style from "./Navbar.module.css";

function Navigation() {
  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-dark py-lg-3 px-sm-5 px-lg-2 px-3 ${style.navbar}`}>
        <div className="container-fluid">
          <a className={`navbar-brand ms-lg-5 ps-lg-5 me-lg-5 ${style.brand}`} href="/">
            PLAY
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav text center ms-xl-5 ps-lg-5 me-lg-auto ${style.link}`}>
              <li className="nav-item ms-lg-4">
                <a className={`${style.link}`} href="/profile">
                  PROFILE
                </a>
              </li>
              <li className="nav-item ms-lg-4">
                <a className={`${style.link}`} href="/#features">
                  FEATURES
                </a>
              </li>
              <li className="nav-item ms-lg-4">
                <a className={`${style.link}`} href="/game-list">
                  GAME
                </a>
              </li>
              <li className="nav-item ms-lg-4">
                <a className={`${style.link}`} href="/#about">
                  ABOUT
                </a>
              </li>
            </ul>
            <ul className={`navbar-nav text center me-lg-5 pe-lg-5 ${style.link}`}>
              <li className="nav-item">
                <a className={`${style.link}`} href="/register">
                  REGISTER
                </a>
              </li>
              <li className="nav-item">
                <a className={`ms-lg-3 ${style.link}`} href="/login">
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

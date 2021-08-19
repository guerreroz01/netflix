import React, { useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";

import "./nav.css";

export default function Nav() {
  const [show, setShow] = useState(false);
  const logOut = () => {
    auth.signOut();
    window.location.reload();
  };
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img className="nav__logo" src="/logo.png" alt="" onClick={logOut} />
        <img
          className="nav__avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt=""
        />
      </div>
    </div>
  );
}

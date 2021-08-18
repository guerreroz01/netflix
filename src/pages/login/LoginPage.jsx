import React, { useState, useEffect } from "react";
import SignUp from "../../components/signUp/SignUp";
import "./loginPage.css";

function LoginPage({ setUser }) {
  const [signIn, setSignIn] = useState(false);
  return (
    <>
      <div
        className="loginPage"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/login.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="loginPage__background">
          <img
            src="/logo.png"
            alt=""
            className="loginPage__logo"
            onClick={() => setSignIn(false)}
          />
          {!signIn && (
            <button
              className="loginPage__signIn_button"
              onClick={() => setSignIn(true)}
            >
              Iniciar Sesión
            </button>
          )}
          <div className="loginPage__gradient"></div>
        </div>
        <div className="loginPage__body">
          {signIn ? (
            <SignUp />
          ) : (
            <>
              <h1>Todas las películas y series que desees, y mucho más.</h1>
              <h2>Disfruta donde quieras. Cancela cuado quieras.</h2>
              <h3>
                ¿Quieres ver algo ya? Escribe tu correo para crear una
                suscripción a Netflix o reactivarla.
              </h3>
              <div className="loginPage__input">
                <form>
                  <input type="email" placeholder="Correo electrónico" />
                  <button
                    className="loginPage__getStarted"
                    onClick={() => setUser(true)}
                  >
                    Comenzar &gt;
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginPage;

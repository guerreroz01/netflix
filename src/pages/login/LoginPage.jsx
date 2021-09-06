import React, {useState} from "react";
import SignUp from "../../components/signUp/SignUp";
import "./loginPage.css";

function LoginPage() {
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
                <div className={`loginPage__body ${signIn && " signIn__mobile"} `}>
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
                                    <button className="loginPage__getStarted" onClick={() => {}}>
                                        Comenzar &gt;
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="loginPage__tv">
                <div className="loginPage__tv__left">
                    <h2>Enjoy on your TV.</h2>
                    <p>
                        Whatch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                        Blu-ray players, and more
                    </p>
                </div>
                <div className="loginPage__tv__right">
                    <img src={process.env.PUBLIC_URL + "/tv.png"} alt="" />
                    <video
                        className="loginPage__tv__video"
                        autoPlay
                        playsInline
                        muted
                        loop
                    >
                        <source
                            src={process.env.PUBLIC_URL + "/video-tv-0819.m4v"}
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
            <div className="loginPage__phone">
                <div className="loginPage__phone__left">
                    <img src={process.env.PUBLIC_URL + "/mobile-0819.jpg"} alt="" />
                    <div className="loginPage__phone__leftContainer">
                        <div className="loginPage__phone__leftImage">
                            <img src={process.env.PUBLIC_URL + "/boxshot.png"} alt="" />
                        </div>
                        <div className="loginPage__phone__leftD">
                            <h4>Stranger Things</h4>
                            <p>Downloading...</p>
                        </div>
                    </div>
                </div>
                <div className="loginPage__phone__right">
                    <h2>Download your shows to watch offline.</h2>
                    <p>Save your favorites easily and always have something to watch</p>
                </div>
            </div>
            <div className="loginPage__mac">
                <div className="loginPage__mac__left">
                    <h2>Whatch everywhere.</h2>
                    <p>Stream unlimited movies and TV shows on your phone,
                        tablet, laptop, and TV without paying more.</p>
                </div>
                <div className="loginPage__mac__right">
                    <div className="loginPage__mac_right__imgContainer">
                        <img src={process.env.PUBLIC_URL + "/devices.png"} alt="" />
                    </div>
                    <video
                        className="loginPage__mac__right__videoContainer"
                        autoPlay
                        playsInline
                        muted
                        loop>
                        <source
                            src={process.env.PUBLIC_URL + "/video-devices.m4v"}
                        />
                    </video>
                </div>
            </div>
            <div className="loginPage__kids">
                <div className="loginPage__kids__left">
                    <img src={process.env.PUBLIC_URL + "/kidsProfile.png"} alt="" />
                </div>
                <div className="loginPage__kids__right">
                    <h2>Create profiles for kids.</h2>
                    <p>Send kids on adventures with their favorite characters
                        in a space made just for them-free with your membership.</p>
                </div>
            </div>
        </>
    );
}

export default LoginPage;

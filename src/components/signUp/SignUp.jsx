import React, { useRef } from "react";
import { auth } from "../../firebaseConfig.js";
import "./signUp.css";

function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const checkboxRef = useRef();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleCheckbox = () => {
    checkboxRef.current.checked = !checkboxRef.current.checked;
  };
  return (
    <div className="signUp">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <div className="signUp__checkbox">
          <input type="checkbox" ref={checkboxRef} name="remember" />
          <label onClick={handleCheckbox} htmlFor="remember">
            Remember me
          </label>
          <div></div>
          <h4>Need Help?</h4>
        </div>
        <h4>
          <span className="signUp__gray">New to Netflix? </span>
          <span className="signUp__link" onClick={register}>
            {" "}
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;

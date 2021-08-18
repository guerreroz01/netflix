import React from "react";
import "./signUp.css";

function SignUp() {
  return (
    <div className="signUp">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
        <h4></h4>
      </form>
    </div>
  );
}

export default SignUp;

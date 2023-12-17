import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import React from "react";

function Login() {
  return (
    <>
      <div className="form-login" id="login">
        <hr />
        <h1>Log in</h1>
        <p>
          Don't have an account?{" "}
          <a href="#signup">
            <b>Sign up</b>
          </a>
        </p>
        <br />
        <button className="connect-gg">
          <span>
            <FontAwesomeIcon icon={faGoogle} />
            <label>Continue with Google</label>
          </span>
        </button>
        <br />
        <br />
        <p>Or continue with your email</p>
        <div className="input-box">
          <div>Username</div>
          <input type="text" required />
        </div>
        <div className="input-box">
          <div>Password</div>
          <input type="text" required />
        </div>
        <div className="remember-me">
          <span>
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
          </span>
        </div>
        <div className="fotgot">
          <u>
            <b>Forget your password</b>
          </u>
        </div>
        <button className="submit-button">Log in</button>
        <hr />
        <div className="about">
          <span className="item">Help</span>
          <span className="item">Privacy</span>
          <span className="item">Terms</span>
        </div>
      </div>
      <div className="form-login" id="signup">
        <br />
        <button className="connect-gg">
          <span>
            <FontAwesomeIcon icon={faGoogle} />
            <label>Sign up with Google</label>
          </span>
        </button>
        <hr />
        <br />
        <p>Sign up with your email address</p>
        <div className="input-box">
          <div>Profile name</div>
          <input type="text" required />
        </div>
        <div className="input-box">
          <div>Email</div>
          <input type="text" required />
        </div>
        <div className="input-box">
          <div>Password</div>
          <input type="text" required />
        </div>
        <p className="small-p">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </p>
        <br />
        <br />
        <div className="question">
          What's your gender? <span className="grey">(optional)</span>
        </div>
        <div className="anwser">
          <span className="item">
            <input type="checkbox" />
            Female
          </span>
          <span className="item">
            <input type="checkbox" />
            Male
          </span>
          <span className="item">
            <input type="checkbox" />
            Non binary
          </span>
        </div>
        <div className="question">What's your date of borth?</div>
        <div className="time">
          <span className="input-box-time">
            <div>Month</div>
            <input type="text" required />
          </span>
          <span className="input-box-time">
            <div>Date</div>
            <input type="text" required />
          </span>
          <span className="input-box-time">
            <div>Year</div>
            <input type="text" required />
          </span>
        </div>
        <br />
        <p>
          By creating an account, you agree to the <u>Terms of use</u> and{" "}
          <u>Privacy Policy.</u>
        </p>
        <br />
        <button className="submit-button">Sign up</button>
        <br />
        <p>
          Already have an account?{" "}
          <a href="#login">
            <b>Log in</b>
          </a>
        </p>
        <br />
        <br />
      </div>
    </>
  );
}

export default Login;

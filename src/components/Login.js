import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import { openModal } from "../actions/modalAction";     
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  useEffect(() => { 
    if (userInfo) {
      dispatch(openModal("closed",""));
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  }, [dispatch, userInfo]);

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <div className="login-form">
      <h1> Log in or Sign in</h1>
      {error && <h2 className="error">{error}</h2>}
      {loading && <h2 className="loading">Loading...</h2>}

      <form onSubmit={submitLogin}>
        <button className="facebook-login">Login with Facebook</button>
        <button className="google-login">Login with Google</button>
        <button className="github-login">Login with Github</button>
        <div className="login-or center">
          <span>or</span>
          <div className="or-divider"></div>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="browser-default"
          placeholder="Email or phone number"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="browser-default"
          placeholder="Password"
        />
        <button className="signIn-btn">Sign in</button>
        <div className="divider"></div>
        <div className="create-account">
          <span>Don't have an account?</span>
          <button>Sign up</button>
        </div>
        <div className="forgot-password">
          <span>Forgot password?</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
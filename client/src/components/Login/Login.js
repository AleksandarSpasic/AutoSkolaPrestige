import React, { useState, useEffect } from "react";
import "./LoginStyle.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/panel";
    }
  });

  const handleLogin = () => {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    const body = JSON.stringify({ email, password });
    axios
      .post("/auth", body, config)
      .then(res => {
        localStorage.setItem("token", res.data.user.email);
        window.location.href = "/panel";
      })
      .catch(err => {
        setError(err.response.data.msg);
      });
  };

  return (
    <div className="login_wrapper">
      <div className="login">
        <h2>Login</h2>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <p className="error_msg">{error}</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;

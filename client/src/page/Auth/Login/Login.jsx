import React from "react";
import { useState } from "react";
import { useLoginUserMutation } from "../../../redux/dataApi";
import { useGetTypeQuery } from "../../../redux/dataApi";
import { Link } from "react-router-dom";
import style from "./Auth.module.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useLoginUserMutation();
  const { data } = useGetTypeQuery();
  console.log(data);
  const login = async () => {
    console.log({
      email,
      password,
    });
    if (email && password) {
      await loginUser({
        email,
        password,
      })
        .unwrap()
        .then((data) => {
          // onSuccess handler - handle successful response data here
          localStorage.setItem("token", data.token);
          setEmail("");
          setPassword("");
        });
    }
  };

  return (
    <div className={style.Auth}>
      <div className={style.container}>
        <form className={style.Auth_form}>
          <div className={style.Auth_nav}>
            <Link to="/login">Login</Link>
            <Link to="/registration">Create Account</Link>
          </div>
          <div>
            <h2>WELCOME BACK</h2>
            <p>
              Sign into your existing account to earn rewards, check existing
              orders and more
            </p>
          </div>
          <div className={style.Auth_form_input}>
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={login}>Войти</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

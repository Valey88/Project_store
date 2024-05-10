import React from "react";
import { useState } from "react";
import { useLoginUserMutation } from "../../redux/dataApi";
import { useGetTypeQuery } from "../../redux/dataApi";
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
    <div>
      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}></button>
    </div>
  );
};

export default Login;

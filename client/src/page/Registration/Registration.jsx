import React from "react";
import { useState } from "react";
import { useRegisterUserMutation } from "../../redux/dataApi";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fio, setFio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registration] = useRegisterUserMutation();
  const reg = async () => {
    console.log({
      fio,
      email,
      phoneNumber,
      password,
    });
    if (fio && email && phoneNumber && password) {
      await registration({
        fio,
        email,
        phoneNumber,
        password,
      })
        .unwrap()
        .then((data) => {
          // onSuccess handler - handle successful response data here
          localStorage.setItem("token", data.token);
          setFio("");
          setEmail("");
          setPhoneNumber("");
          setPassword("");
        })
        .catch((error) => {
          console.error("Registration error:", error);
          // Handle error if needed
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
      <input
        type="text"
        value={fio}
        placeholder="fio"
        onChange={(e) => setFio(e.target.value)}
      />
      <input
        type="text"
        value={phoneNumber}
        placeholder="phoneNumber"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={reg}>Регистрация</button>
    </div>
  );
};

export default Registration;

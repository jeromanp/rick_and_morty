import React from "react";
import style from "./Form.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Form() {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email:"",
    password:"",
  })

  const handleInputChange = (event)=>{

  }

  return (
    <div className={style.container}>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        placeholder="Ingresa tu usuario"
        autocomplete="off"
        value={userData.email}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        name="password"
        placeholder="Ingresa tu contraseña"
        value={userData.password}
        onChange={handleInputChange}
      />
      <br />
      <Link to="/home">
        <button>LOGIN</button>
      </Link>
    </div>
  );
}

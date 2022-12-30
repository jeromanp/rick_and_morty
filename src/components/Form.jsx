import React from "react";
import style from "./Form.module.css";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <div className={style.container}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        placeholder="Ingresa tu usuario"
        autocomplete="off"
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="text" name="password" placeholder="Ingresa tu contraseña" />
      <br />
      <Link to="/home">
        <button>LOGIN</button>
      </Link>
    </div>
  );
}

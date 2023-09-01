import React from "react";
import style from "./Form.module.css";
import validate from "./validation";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({
      ...userData,
      [property]: value,
    });

    setErrors(validate({
        ...userData,
        [property]: value,
      }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div>
      <div className={style.anuncio}>
        <span>Ingrese con estas credenciales</span>
        <p>username = <b>jeroman@email.com</b></p>
        <p>password = <b>1password</b></p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={style.container}>
          <h1 className={style.h2}>Login</h1>
          <h4 className={style.h4}>Ingresa tus credenciales</h4>
          <label></label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={userData.username}
            onChange={handleInputChange}
            className={errors.username && style.warning}
          />
          <p className={style.danger}>{errors.username}</p>
          <br />

          <label></label>          
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleInputChange}
            className={errors.password && style.warning}
          />
          <p className={style.danger}>{errors.password}</p>
          <br />
          {/*Para ocultar el button hasta que acceda un email y password correcto
           <div>
            {Object.keys(errors).length === 0 ? <button className={style.buttonLogin} type="submit">LOGIN</button> : null}
          </div> */}

          
            <button className={style.buttonLogin} type="submit">
              LOGIN
            </button>
         
        </div>
      </form>
    </div>
  );
}

// eslint-disable-next-line
const regexUsername = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// eslint-disable-next-line
const regexPassword = /\d/;

export default function validate(inputs) {
  const errors = {};

  if (!inputs.username) {
    errors.username = "El nombre de usuario no puede estar vacío";
  } else if (!regexUsername.test(inputs.username)) {
    errors.username = "El nombre de usuario debe ser un correo válido";
  } else if (inputs.username.length > 35) {
    errors.username = "El nombre de usuario no puede tener más de 35 carácteres";
  }
  if (!inputs.password) {
    errors.password = "El password no puede estar vacío";
  } else if (!regexPassword.test(inputs.password)) {
    errors.password = "La contraseña debe tener al menos un número";
  } else if (inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres";
  }
  return errors;
}

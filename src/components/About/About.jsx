import React from "react";
import styles from "./About.module.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  function backtoHome() {
    return navigate("/home");
  }

  return (
    <>
      <div className={styles.about}>
        <h1 className={styles.titleAbout}>Acerca de la App</h1>

        <br />
        <h2 className={styles.h2}>¿Porqué se implementó este proyecto</h2>

        <p className={styles.p}>
          Rick and Morty es un pequeño proyecto desarrolaldo con React como
          componente principal, con el objetivo de poder interactuar y mejorar
          conocimientos y habilidades obtenidos durante el curson del Bootcamp
          de Soy Henry en su Módulo 2 dedicado a la parte del FrontEnd.
        </p>

        <p className={styles.p}>
          Conocemos de las grandes cosas que podemos hacer con el conocimiento
          de una Librería como React, y que mejor manera de poder poner en
          práctica nuestros conocimientos que con la realizacón de este Proyecto
        </p>

        <p className={styles.p}>
          El propósito de este Proyecto es poder implementar parte del
          conocimiento del Bootcamp así como de perfeccionar nuestra técnica de
          autoaprendizaje, pero sobretodo poder ver reflejado una parte de
          nuestra creatividad y personalización en un Proyecto que poco a poco
          se fue desarrollando durante el curso del Bootcamp.
        </p>
        <br />

        <h2 className={styles.h2}>Sobre el autor</h2>

        <p className={styles.p}>
          Mi nombre es José Eduardo Román Piña, termine la Ingeniería en
          Telecomunicaciones, Sistemas y Electrónica en la Universidad Nacional
          Autónoma de México en el año 2018. Durante un año me especialice en
          Switching and Routing con la tecnología de Cisco.
        </p>

        <p className={styles.p}>
          Trabajé un año con ocho meses en una empresa proveedora de servicios
          de internet, dedicandome a brindar los servicios de video, telefonía e
          internet las 24 horas del día, 365 días de año, así como el
          mantenimiento, administración, operación, atención a fallas, ejecución
          de Ventanas de Mantenimiento en 3 sitios diferentes, Atlacomulco,
          Ixtlahuca y Jilotepec en el Estado de México.
        </p>

        <p className={styles.p}>
          Me agradaba mi trabajo, ya que siempre me fije la tarea de poder
          ayudar a los clientes que dependían directamente de mi trabajo, sin
          embargo requería de bastante tiempo y dedicación. Lo que me obligo a
          buscar otras opciones.
        </p>

        <p className={styles.p}>
          Siempre he tenido la curiosidad por aprender otras tecnologías que
          pudieran ayudarme a mi crecimeinto profesional, y agradezco mucho ese
          anuncio publicitario de Henry porque sin él, no estaría escribiendo
          estas líneas de texto, durante este tiempo he aprendido muchas cosas
          que hace apenas algunos meses ni tenía el conocimiento de su
          existencia. Por ello mi trabajo actual esta en el bootcamp,
          preparandome para ser Desarrollador FullStack, sé que no es fácil,
          pero sé que tengo la capacidad para poder demostrarme a mí mismo que
          si puedo, y espero en algún futuro no muy lejano, poder volver a leer
          este texto y decirme... ¡Si pude!
        </p>

        <p className={styles.p}>Gracias Henry por aparecerte en mi camino.</p>
      </div>
      <div>
        <button className={styles.buttonBack} onClick={backtoHome}>
          Volver
        </button>
      </div>
    </>
  );
}

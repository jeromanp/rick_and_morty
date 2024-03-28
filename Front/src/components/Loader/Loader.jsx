import React from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Cargando...</h1>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>F
        <div className={styles.circle}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
}

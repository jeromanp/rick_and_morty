import styles from "./Card.module.css";

//se hizo destructuring de props => function Card (props){}
//props tiene las propiedades:name,species,gender,image y la funcion onClose
export default function Card({ name, species, gender, image, onClose }) {
  return (
    <div className={styles.card}>
      <button className={styles.cerrarCard} onClick={onClose}>
        X
      </button>
      <h2 className={styles.name}>{name}</h2>
      <h3 className={styles.species}>Specie:{species}</h3>
      <h3 className={styles.gender}>Gender:{gender}</h3>
      <img src={image} alt={name} />
    </div>
  );
}

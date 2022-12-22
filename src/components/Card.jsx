import styles from "./Card.module.css"

//se hizo destructuring de props => function Card (props){}
export default function Card({name,species,gender,image,onClose}) {
   return (
      <div className = {styles.card}>
         <button className={styles.cerrarCard} onClick={onClose}>X</button>
         <h2 className={styles.name}>{name}</h2>
         <h2 className={styles.species}>{species}</h2>
         <h2 className = {styles.gender}>{gender}</h2>
         <img  src={image} alt={name} />                
      </div>
   );
}

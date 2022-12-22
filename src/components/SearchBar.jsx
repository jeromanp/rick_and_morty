import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
   return (
      <div>
         <input className={styles.inputCard} type='search' placeholder="ID del personaje" />
         <button className={styles.buscarCard}  onClick={()=>{props.onSearch(5)}}>Agregar</button>
      </div>
   );
}

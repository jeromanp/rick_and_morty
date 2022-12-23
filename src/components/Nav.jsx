import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";

export default function Nav(props) {
   return (
      <div className={styles.nav}>  
         <div >
            <button className={styles.homeFiltrar}>Home</button>
         </div>       
         <div>
            <button className={styles.homeFiltrar}>Filtrar</button>
         </div>  
         <div>
            <SearchBar onSearch={props.onSearch}/>
         </div>
         
      </div>
   );
}

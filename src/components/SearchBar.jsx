import "./SearchBar.css"

export default function SearchBar(props) {
   return (
      <div>
         <input id="inputCard"type='search' placeholder="ID del personaje" />
         <button id="buscarCard"  onClick={()=>{props.onSearch(5)}}>Agregar</button>
      </div>
   );
}

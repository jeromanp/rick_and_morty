import "./Nav.css"

export default function Nav(props) {
   return (
      <div className="nav">         
         <input id="inputCard"type='search' placeholder="ID del personaje" />
         <button id="buscarCard"  onClick={()=>{props.onSearch(5)}}>Agregar</button>
      </div>
   );
}

import  "./Card.css"

//se hizo destructuring de props => function Card (props){}
export default function Card({name,species,gender,image,onClose}) {
   return (
      <div className = "card">
         <button id="cerrarCard"onClick={onClose}>X</button>
         <h2 className="name">{name}</h2>
         <h2 className="species">{species}</h2>
         <h2 className = "gender">{gender}</h2>
         <img  src={image} alt={name} />                
      </div>
   );
}

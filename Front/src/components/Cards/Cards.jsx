import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <>
      <div className={style.h3Home}>
        {characters.length === 0 ? (
          <h3>Agrega un personaje por su ID</h3>
        ) : null}
      </div>
      
      <div className={style.cards}>
        <div className={style.h3Cards}>
          {characters.length === 0 ? null : (
            <>
            <h3>Da click sobre el nombre para conocer más</h3>
            <h4>Da click en el ❤️ para añadir a Favoritos</h4>    
            <h4>Da click sobre la ❌ para eliminar la Card</h4>        
            </>
          )}
        </div>
        {
          //destructuring del array characters
          //se agrega el termino id al props para cuando se ejecuta onClose
          //se aplica map para indicar las propiedades de cada Card
          characters.map(({ name, species, gender, image, id }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                // onClose es la props que va a ejecutar la funcion onClose de App
                onClose={() => props.onClose(id)}
              />
            );
          })
        }
      </div>
    </>
  );
}

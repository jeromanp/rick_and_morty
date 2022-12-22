import Card from './Card';
import styles from "./Cards.module.css"

export default function Cards(props) {
   //array de objetos con los personajes
   const { characters } = props;
   return (
   <div className = {styles.cards}>
      {
         //destructuring del array characters
         characters.map(({name,species,gender,image}) => {
            return <Card
               name = {name}
               species = {species}
               gender = {gender}
               image = {image}
               onClose = {() => window.alert('Emulamos que se cierra la card')}
            />
         })
      }
   </div>
   );
}

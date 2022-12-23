import styles from './App.module.css'
// import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import characters from './data.js'

function App () {
  return (
    
    <div className={styles.App} style={{ padding: '25px' }}>    
      <div>
        <h1 className={styles.h1}>Rick And Morty</h1>
      </div>      
      <hr />
      <div>
        <Nav
          onSearch={(characterID) => window.alert(characterID)}          
        />        
        <hr />      
        <Cards characters={characters}/>
      </div>      
    </div>
  )
}

export default App

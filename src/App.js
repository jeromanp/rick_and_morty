import './App.css'
// import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'

function App () {
  return (
    
    <div className='App' style={{ padding: '25px' }}>    
      <div>
        <h1 className="titulo">Rick And Morty</h1>
      </div>      
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}          
        />        
        <hr />      
        <Cards characters={characters}/>
      </div>
      
    </div>
  )
}

export default App

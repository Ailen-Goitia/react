import './App.css';
import NavBar from './componentes/navBar/NavBar';
import ItemListContainer from './componentes/navBar/itemListContainer/itemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = {"Bienvenidos"}/>
    </div>
  );
}

export default App;

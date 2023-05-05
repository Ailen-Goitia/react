import './App.css';
import NavBar from './componentes/navBar/NavBar';
import itemListContainer from './componentes/navBar/itemListContainer/itemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <itemListContainer greeting = {"Bienvenidos"}/>
    </div>
  );
}

export default App;

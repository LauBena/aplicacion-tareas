import './App.css';
import ListaTareas from './componentes/ListaTareas';


function App() {
  return (
    <div className="App-tareas">
      <div className="lista-principal">
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;

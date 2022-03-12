import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Busqueda from './Components/Busqueda/Busqueda';

function App() {
  return (
    <Router>
      <main className='main'>
        <section className='box'>
          <Busqueda />
        </section>

        <footer></footer>

      </main>
    </Router>
  );
}

export default App;

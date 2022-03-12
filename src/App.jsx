import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Busqueda from './Components/Busqueda/Busqueda';
import { Provider } from 'react-redux';
import generateStore from './Redux/store';

function App() {

  const store = generateStore();

  return (
    <Provider store={store}>
      <Router>
        <main className='main'>
          <section className='box'>
            <Busqueda />
          </section>

          <footer></footer>

        </main>
      </Router>
    </Provider>
  );
}

export default App;

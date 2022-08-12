import './App.css';
import Busca from './components/HomePage/Busca/Busca';
import Login from './components/HomePage/Login/Login';
import Cadastro from './components/HomePage/Cadastro/Cadastro';
import Menu from './components/HomePage/Menu/Menu';
import Card from './components/HomePage/Card/Card';

function App() {
  return (
    <div className="App">
    
    <Busca/>
    <Login/>
    <Cadastro/>
    <Menu/>
    <Card/>
    </div>
  );
}

export default App;

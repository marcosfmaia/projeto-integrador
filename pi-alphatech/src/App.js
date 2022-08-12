import './App.css';
import Busca from './components/HomePage/Busca';
import Login from './components/HomePage/Login';
import Cadastro from './components/HomePage/Cadastro';
import Menu from './components/HomePage/Menu';
import Card from './components/HomePage/Card';

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

import './style.css'

export default function Home () {
  
    const logout = () => {
      
    }

    return (
        <div  className="container">
          <h1>Sem bem vindo voçe esta logado</h1>

          <p onClick={logout}>Sair</p>
        </div>
    )
}
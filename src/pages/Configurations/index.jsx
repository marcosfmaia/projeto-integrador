import "./style.css"
import Container from "../../components/Container";
import HeaderLogged from "../../components/HeaderLogged";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";


export default function Configurations () {

    return (

        <Container>
        
            <HeaderLogged />

            <div className='configurations__header'>
            <h1 className='title__configurations'>Configurações da Conta</h1>
        
            </div>

            <div className='configurations__main'>
            <h3 className='password'>Senha</h3>
            <Link to='/changePassword'>
                <button className='change__btn'>Alterar</button>
            </Link>
            <hr className='line'></hr>

            <h3 className='email'>Endereço de e-mail</h3>
            <p className='main__text'>Seu endereço de e-mail é <strong>digitalhouse@gmail.com</strong></p>
            <Link to='/changeEmail'>
                <button className='change__btn'>Alterar</button>
            </Link>    
            <hr className='line'></hr>

            <h3 className='disable__account'>Desativar Conta</h3>
            <p className='main__text'>Deseja desativar sua conta?</p>
            <Link to='/disableAccount'>
                <button className='disable__account__btn'>Desativar</button>
            </Link>
    

            </div>

            <Footer />

        </Container>
        
    )
}
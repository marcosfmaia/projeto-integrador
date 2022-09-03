import './style.css'
import './mobile.css'

import { Link } from 'react-router-dom'
import Container from '../../components/Container';
import HeaderLogged from '../../components/HeaderLogged';
import Footer from '../../components/Footer';

export default function ChangeEmail () {
    return (
        <Container>
            <HeaderLogged />
            <form className='form-change-email' onSubmit=''>
                <h2 className='title-change-email'>Alterar E-mail</h2>

                <fieldset className="form-group__reset">
                    <i class="bi bi-envelope-fill reset__icon"></i>
                    <input 
                    type="email" 
                    className='reset__email' 
                    placeholder='Digite seu email atual' 
                    />
                </fieldset>

                <fieldset className="form-group__reset">
                    <i class="bi bi-envelope-fill reset__icon"></i>
                    <input 
                    type="email" 
                    className='reset__email' 
                    placeholder='Digite um novo email' 
                    />
                </fieldset>

                <button className="btn-change-email">Alterar</button>

                <div className="change-group__previus">
                    <i class="bi bi-arrow-left-short previus__arrow"></i>
                    <Link to="/configurations" className="previus__configurations">Voltar</Link>
                </div>
            </form>
            <Footer />
        </Container>
    )
}
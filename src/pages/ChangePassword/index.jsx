import './style.css'
import './mobile.css'

import { Link } from 'react-router-dom'
import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function ChangePassword () {

    return (
        <Container>
            <Header />
            <form className='form-change' onSubmit=''>
                <h2 className='title-change'>Alterar Senha</h2>

                <fieldset className="form-group__reset">
                    <i class="bi bi-lock-fill reset__icon"></i>
                    <input 
                    type="password" 
                    className='reset__pass' 
                    placeholder='Digite sua senha atual' 
                    />
                </fieldset>

                <fieldset className="form-group__reset">
                    <i class="bi bi-lock-fill reset__icon"></i>
                    <input 
                    type="password" 
                    className='reset__pass' 
                    placeholder='Digite uma nova senha' 
                    />
                </fieldset>
                
                <fieldset className="form-group__reset">
                    <i class="bi bi-lock-fill reset__icon"></i>
                    <input 
                    type="password" 
                    className='reset__pass' 
                    placeholder='Digite novamente' 
                    />
                </fieldset>
                
                <button className="btn-change">Alterar</button>

                <div className="change-group__previus">
                    <i class="bi bi-arrow-left-short previus__arrow"></i>
                    <Link to="/configurations" className="previus__configurations">Voltar</Link>
                </div>
            </form>
            <Footer />

        </Container>
    )
}
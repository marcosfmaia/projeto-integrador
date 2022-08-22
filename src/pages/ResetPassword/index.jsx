import './style.css'

import * as React from "react";
import { Link } from 'react-router-dom'
import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ResetPassword () {    
    return (
        <Container>
            <Header />
            <form className='form-reset' onSubmit=''>
                <h2 className='title__reset'>Recuperar senha</h2>

                <fieldset className="form-group__reset">
                    <i class="bi bi-envelope-fill reset__icon"></i>
                    <input type="email" 
                    id="user-email" 
                    className="reset__email" 
                    placeholder="Digite seu usuario" 
                    name="email"
                    value=''
                    onChange=''
                    />
                </fieldset>

                <fieldset className='form-group__reset'>
                    <i class="bi bi-lock-fill reset__icon"></i>
                    <input 
                    type="email" 
                    className='reset__pass' 
                    placeholder='Digite sua nova senha'
                    // name='password'
                    // value={form.password
                    />
                </fieldset>

                <button className="btn-reset">RECUPERAR</button>

                <div className="reset-group__previus">
                    <i class="bi bi-arrow-left-short previus__arrow"></i>
                    <Link to="/login" className="previus__login">Voltar</Link>
                </div>
            </form>

            <Footer />
        </Container>
    )
}
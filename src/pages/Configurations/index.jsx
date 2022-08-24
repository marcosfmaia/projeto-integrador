import "./style.css";
import * as React from "react";
import { Link } from 'react-router-dom'
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function Configurations ( { children} ) {
    return (
        
        
        <div className='container'>
            {children}

            <Header />

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
                    <button className='change__btn'>Alterar</button>
                    <hr className='line'></hr>


                    <h3 className='disable__account'>Desativar Conta</h3>
                    <p className='main__text'>Deseja desativar sua conta?</p>
                    <button className='disable__account__btn'>Desativar</button>
            
                </div>
            <Footer />
        </div>
    )
}

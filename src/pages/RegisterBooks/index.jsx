import './style.css'

import * as React from "react";

import Images from '../../assets/book.jpg'

// import Header from '../../components/Header'
// import NavBar from '../../components/NavBar'
// import { Link } from 'react-router-dom'


export default function RegisterBooks () {
    return(
        <div className="container-register__books">
            {/* <Header /> */}
            {/* <NavBar /> */}

            <p className='margin'></p>

            <h2 className="title__register">Cadastre seus livros</h2>

            <section className="register__books">
                <div className="content__info">
                    <h2 className="title__book">Titulo do livro: <span className='title__book-dest-emphasis'>Lorem Ipsun Dollor</span> </h2>

                    <figure className="content-image__book">
                        <img src={Images} alt="imagem do livro" className="image__book" />

                        <legend className='description__book'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.  Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</legend>
                    </figure>


                    {/* <p className="description__book">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.  Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</p> */}
                </div>

                <div className="content__location">
                    <h4 className="subtitle__book subtitle__location">
                        <span className="icon">
                            <i class="bi bi-geo-alt-fill location__icon"></i>
                        </span>
                        Localização 
                    </h4>

                    <h5 className="origin__location">Origen:</h5>
                    <p  className='location-origin__book'>Local de origem do livro</p>
                </div>

                <form className="form-query__cep">
                    <label htmlFor="query__cep" className='query__cep'>Digite seu CEP</label>

                    <fieldset className="form-group__info__cep">
                        <input 
                        type="search" 
                        id="query__cep"
                        className="input__cep" 
                        placeholder='ex: 00000000'
                        />
                        <i class="bi bi-search search__icon"></i>

                        <button className="btn__query-cep">Ok</button>
                    </fieldset>    
                </form>

                <div className='content__btn'>
                    <button className="btn-register__book">Cadastrar</button>
                </div>

            </section>
        </div>
    )
}
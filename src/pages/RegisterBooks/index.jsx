import './style.css'

import * as React from "react";

import Images from '../../assets/book.jpg'

import Header from "../../components/Header";
import Main from "../../components/Main";
import Container from "../../components/Container";
import Footer from "../../components/Footer";


export default function RegisterBks () {

    const handleTitle = () => {

    }
    return(
        <Container>
            <Header />

           <h2 className="title__register">Cadastre seus livros</h2>

            <section className="register__books">
                <div className="content__info">
                    <div className='content__info-title'>
                        <label htmlFor="title" className="title__book">Titulo do livro:</label>
                        <input type="text" 
                        className='input__title-boook'
                        placeholder='Digite o titulo'
                        id='title'
                        name='ititle'
                        value=''
                        onChange={handleTitle}
                        />
                    </div>

                    <figure className="content-image__book">
                        {/* <img src={Images} alt="imagem do livro" className="image__book" /> */}

{/* 
                        <legend className='description__book'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.  Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</legend> */}

                        <label htmlFor="file" className='choose__file-book'>Escolher imagem</label>
                        <input type="file" accept='image/' id='file' className='file__image-book'/>
                    </figure>



                    <div className='description-book'>
                        <label htmlFor='description' className="title__book description__text-book">Digite a descrição do livro:</label>

                        <textarea id='description' className='input__description-book' placeholder='Escreva a sinopse do seu livro'></textarea>

                    </div>
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
            <Footer />
        </Container>
    )
}
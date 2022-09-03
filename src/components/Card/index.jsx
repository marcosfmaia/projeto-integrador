import './styles.css';
import ModalDetails from '../../components/ModalDetails';
import book from '../../assets/livro01.webp';

import * as React from 'react';

export default function Card(props) {

    const [showModal, setShowModal] = React.useState(false);

    return (
        <div className="card">
        <div className="card__body">
            
            <img className='img__book' src={book} alt='Livro' />
            <h5 className="card__title">Aprendendo a desenvolver Aplicações Web</h5>
            <h4 className="card__subtitle">Tecnologia da Informação</h4><br></br>
            <h3 className="description">Descrição</h3>
            <p className="card__description">Domine os fundamentos do desenvolvimento de aplicações web
            implementando uma aplicação simples a partir do zero, baseada em banco de dados, usando HTML, 
            Javascript e outras ferramentas de código aberto.
            <br />
            <br />
            Livro em ótimo estado.

            </p><br></br>
            <button href="#" className="card__btn" onClick={() => setShowModal(true)}>Saiba Mais</button>
        </div>
        {showModal && <ModalDetails user={props.user} setShowModal={setShowModal} />}
        </div>
    )
}
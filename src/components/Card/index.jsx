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
            <h5 className="card__title">Título do livro</h5>
            <h4 className="card__subtitle">Gênero/Área de Conhecimento</h4><br></br>
            <h3>Descrição</h3>
            <p className="card__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aperiam non veritatis laboriosam ea ipsum tempora! Necessitatibus officia aspernatur reiciendis, perspiciatis quos iste modi. Incidunt dolorem eligendi aliquid sit nam?
            </p><br></br>
            <button href="#" className="card__btn" onClick={() => setShowModal(true)}>Saiba mais</button>
        </div>
        {showModal && <ModalDetails user={props.user} setShowModal={setShowModal} />}
        </div>
    )
}
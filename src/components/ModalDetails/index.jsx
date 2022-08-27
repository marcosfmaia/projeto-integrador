import './styles.css'

import * as React from 'react';
import axios from 'axios';

export default function ModalDetails(props) {

    /*React.useEffect(() => {
        const getAdress = async () => {
            const response = await axios.get('https://viacep.com.br/ws/${props.user.zipcode}/json/');
        }
        getAdress();
    })*/
    
    return (
        <div className='modal'>
            <div className='modal__body'>
                <h6 className='modal__title'>{props.user.name}</h6>
                <h5 className='modal__subtitle'>{props.user.genre} </h5>
                <p className='modal__text'>Descrição: </p>
                <p className='modal__text'>Cadastro: </p>
                <p className='modal__text'>Disponibilidade: </p>
                <p className='modal__text'>Endereço: </p>
                <p className='modal__text'>Contato: </p>
                <button 
                    onClick={() => props.setShowModal(false)}
                    className='modal__btn'
                >
                    Fechar
                    </button>

                <div className='modal__img'>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                </div>

            </div>
        </div>
    )
}
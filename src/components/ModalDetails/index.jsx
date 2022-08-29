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
                <button 
                    className='modal__btnx'
                    onClick={() => props.setShowModal(false)}
                >
                    X
                    </button>

                <div>
                    <h6 className='modal__title'>Título do Livro</h6>
                    <h5 className='modal__subtitle'>Gênero do livro</h5>
                    
                    <div>
                        <p className='modal__cad'>Cadastro:</p>
                    </div>

                    <div>
                        <p className='modal__disp'>Disponibilidade: </p>
                    </div>

                </div>

                <div className='description'>
                    <h4 className='text__title'>Descrição</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora ipsa eligendi dolores natus pariatur aperiam magnam facere dolorum? Odio id ut excepturi corrupti eos ab tempore illum ducimus beatae aut, inventore neque, fuga culpa non doloremque repudiandae quas pariatur!</p>
                </div>


                
                <aside>
                    <p className='modal__text'>Endereço: <br /></p>
                    <p className='modal__text'>Contato: </p>
                </aside>

                <div>
                <h3 className='img__title'>Imagens</h3>
                <ul>
                    <li className='modal__img'></li>
                    <li className='modal__img'></li>
                    <li className='modal__img'></li>
                </ul>
                </div>

                <div>
                    <button 
                    className='modal__btn'
                    onClick={() => props.setShowModal(false)}
                    >
                    Fechar
                    </button>
                </div>

            </div>
        </div>
    )
}
import './styles.css'

import * as React from 'react';
/*import axios from 'axios';*/

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
                
                <div>
                    <h6 className='modal__title'>Aprendendo a desenvolver Aplicações Web</h6>
                    <h5 className='modal__subtitle'>Tecnologia da Informação</h5>
                    
                    <div>
                        <p className='modal__cad'><strong>Cadastro:</strong>128.5</p>
                    </div>

                    <div>
                        <p className='modal__disp'><strong>Disponível </strong> </p>
                    </div>

                </div>

                <div className='description'>
                    <h4 className='text__title'>Descrição</h4>
                    <p className='text__description'>Por meio de tutorias que permitem pôr a mão
                    na massa, este guia prático mostra como criar uma interface de usuário, 
                    implementar um servidor, desenvolver uma comunicação cliente-servidor e usar
                    um serviço baseado em nuvem para implantar a aplicação aos desenvolvedores
                    inexperientes de aplicações web.</p>
                
                    <aside>
                    <p className='modal__text'><strong>Endereço:</strong> <br /></p>
                    <p className='modal__text'><strong>Contato:</strong> </p>
                    </aside>
                
                </div>

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
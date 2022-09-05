import './styles.css'

import * as React from 'react';
import axios from 'axios';

export default function Cep(props) {

    const [input, setInput] = React.useState({
        search: ''
    })

    const [adress, setAdress] = React.useState({
        city:'',
        state: '',
        zipicode: '',
        street:'',
        district: ''
    })

    const [warning, setWarning] = React.useState({
        show: false,
        message: ''
    });

    const handleChange = (e) => {
        setInput ({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    
    const getAdress = async (cep) => {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setAdress({
            city: response.data.localidade,
            state: response.data.uf,
            zipicode: response.data.cep,
            street: response.data.logradouro,
            district: response.data.bairro
        })
    }

    // React.useEffect(() => {
    // }, [])

    const handleCep =  () => {
        getAdress(input.search);
    }


    

    return (
        <>
            <form className="form-query__cep">
                <label htmlFor="query__cep" className='query__cep'>Digite seu CEP</label>
                <fieldset className="form-group__info__cep">
                    <input 
                    type="text" 
                    id="query__cep"
                    className="input__cep" 
                    placeholder='ex: 00000000'
                    name='search'
                    value={input.search}
                    onChange={handleChange}
                    
                    />
                    <i class="bi bi-search search__icon"></i>
                    <a className="btn__query-cep" onClick={handleCep}>Ok</a>
                </fieldset>    

                {warning.show && <p className='register__failed'>{warning.message}</p>}
            </form>


            <ul>
                <li className='cep__list-item'><span className='emphasis'>Cep:</span> {adress.zipicode}</li>
                <li className='cep__list-item'><span className='emphasis'>Estado:</span> {adress.state}</li>
                <li className='cep__list-item'><span className='emphasis'>Cidade:</span> {adress.city}</li>
                <li className='cep__list-item'><span className='emphasis'>Bairro:</span> {adress.district}</li>
                <li className='cep__list-item'><span className='emphasis'>Rua:</span> {adress.street}</li>
            </ul>
        </>
    )
      
}
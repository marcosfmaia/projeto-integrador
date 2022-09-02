import './styles.css'

import * as React from 'react';
import axios from 'axios';

export default function QueryCep(props) {

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

    const handleChange = (e) => {
        setInput ({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    const handleSubmit = () => {

    }


    React.useEffect(() => {
        const getAdress = async () => {
            const response = await axios.get(`https://viacep.com.br/ws/33935190/json/`);
            console.log(response.data)
            setAdress({
                city: response.data.localidade,
                state: response.data.uf,
                zipicode: response.data.cep,
                street: response.data.logradouro,
                district: response.data.bairro
            })
        }
        getAdress();
    }, [])
    
    return (
        <>
            <form className="form-query__cep" onSubmit={handleSubmit}>
                <label htmlFor="query__cep" className='query__cep'>Digite seu CEP</label>
                <fieldset className="form-group__info__cep">
                    <input 
                    type="search" 
                    id="query__cep"
                    className="input__cep" 
                    placeholder='ex: 00000000'
                    name='search'
                    value={input.search}
                    onChange={handleChange}
                    />
                    <i class="bi bi-search search__icon"></i>
                    <button className="btn__query-cep">Ok</button>
                </fieldset>    
            </form>

            <ul>
                <li>{adress.city}</li>
                <li>{adress.street}</li>
                <li>{adress.zipicode}</li>
                <li>{adress.state}</li>
                <li>{adress.district}</li>
            </ul>
        </>
    )
      
}
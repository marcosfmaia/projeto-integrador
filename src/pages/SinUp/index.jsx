import './style.css'

import * as React from "react";
import { Link } from 'react-router-dom'


export default function CadastroMain () {

    const [form, setForm] = React.useState({
        name: '',
        email: '',
        telephone: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let users = []

        if(localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'))
        }
        users.push(form)
        localStorage.setItem('users', JSON.stringify(users))
        setForm({
            name: '',
            email: '',
            telephone: '',
            password: ''
        })
    }

    return (
        <div className='container'>
        
            <h2 className="title__registrer">Crie sua Conta</h2>
           
            <form className="form-group" onSubmit={handleSubmit}>
                <fieldset className="form-group__cadastro">
                    <label htmlFor="user-nome" className="label__text">Nome</label>
                    
                    <input type="nome" 
                    id="user-nome"
                    className="user-nome" 
                    placeholder="Nome Completo" 
                    name="name"
                    value={form.name}
                    onChange={handleChange}/>
                </fieldset>

                <fieldset className="form-group__cadastro">
                    <label htmlFor="user-email" className="label__text">Email</label>
                   
                    <input type="email" 
                    id="user-email" 
                    className="user-email" 
                    placeholder="Digite seu email" 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    />
                </fieldset>

                <fieldset className="form-group__cadastro">
                    <label htmlFor="user-telefone" className="label__text">Telefone</label>
                    
                    <input type="number" 
                    id="user-telefone" 
                    className="user-telefone"
                    placeholder="Digite seu telefone"
                    name="telephone"
                    value={form.telephone}
                    onChange={handleChange}
                    />
                </fieldset>

                <fieldset className="form-group__cadastro">
                    <label htmlFor="password" className="label__text">Senha</label>
                    <input type="password"  
                    id="password" 
                    className="user-senha" 
                    placeholder="Digite uma senha forte"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    />
                </fieldset>

                <button className="btn-cadastro">Cadastrar</button>

                <div className="login-group__previus">
                    <i class="bi bi-arrow-left-short register__arrow"></i>
                    <Link to="/" className="register__login">Voltar para login</Link>
                </div>
            </form>
        </div>
    )
}
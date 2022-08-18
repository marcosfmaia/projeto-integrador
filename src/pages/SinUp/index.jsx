import './style.css'

import * as React from "react";
import { Link, useNavigate } from 'react-router-dom'


export default function SinUp () {

    const navigate = useNavigate()
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        telephone: '',
        password: ''
    })
   
    const [warning, setWarning] = React.useState({
        show: false,
        message: ''
    });

    const handleChange = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(form.name === '' || form.email === '' || form.telephone === '' || form.password === '') {
            setWarning({
                show: true,
                message: 'Preencha todos os campos'
            });
            setTimeout(() => {
                setWarning({
                    show: false,
                    message: ''
                });
            }, 3000);
            return;
        }

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
        setWarning({
            show: false,
            message: ''
        });
        setTimeout(() => {
            setWarning({
                show: true,
                message: 'Usuario cadastrado com sucessso'
            });
        }, 3000);
        return;
    }

    React.useEffect(() => {
        let users = JSON.parse(localStorage.getItem('users'))
        if(users.find(u => u.email === form.email)) {
            setWarning({
                show: true,
                message: 'E-mail ja cadastrado'
            });
            
        } else {
            setWarning({
                show: false,
                message: ''
            });
        }
    }, [form.email])


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

                {warning.show && <p className='register__failed'>{warning.message}</p>}

                <div className="login-group__previus">
                    <i class="bi bi-arrow-left-short register__arrow"></i>
                    <Link to="/" className="register__login">Voltar para login</Link>
                </div>
            </form>
        </div>
    )
}
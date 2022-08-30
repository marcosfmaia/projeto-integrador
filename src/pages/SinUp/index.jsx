import './style.css'

import * as React from "react";
import { Link } from 'react-router-dom'

import Header from "../../components/Header";
// import Main from "../../components/Main";
import Container from "../../components/Container";
import Footer from "../../components/Footer";


export default function SinUp () {

    // const navigate = useNavigate():
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
        const user = users.find(u => u.email === form.email);
        if(user) {
            setWarning({
                show: true,
                message: 'E-mail já cadastrado'
            });
        } else {
            users.push(form)
            localStorage.setItem('users', JSON.stringify(users))
            setForm({
                name: '',
                email: '',
                telephone: '',
                password: ''
            })
            setWarning({
                show: true,
                message: 'Usuario cadastrado com sucessso'
            });
            setTimeout(() => {
                setWarning({
                    show: false,
                    message: ''
                });
            }, 10000);
        }
    }

    return (
        <Container>
            <Header />
        
            <h2 className="title__registrer">Crie sua Conta</h2>
           
            <form className="form-group" onSubmit={handleSubmit}>
                <fieldset className="form-group__cadastro">
                    <label htmlFor="user-nome" className="label__text">Nome</label>
                    <i class="bi bi-person-fill login__icon"></i>
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
                    <i class="bi bi-envelope-fill login__icon"></i>
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
                    <i class="bi bi-telephone-fill login__icon"></i>
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
                    <i class="bi bi-lock-fill login__icon"></i>
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
                    <Link to="/login" className="register__login">Voltar para login</Link>
                </div>
            </form>

            <Footer />
        </Container>
    )
}
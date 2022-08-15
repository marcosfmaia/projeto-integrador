import './style.css'

import * as React from "react";
import { useNavigate, Link } from 'react-router-dom'

export default function Login () {

    const navigate = useNavigate()
    const [form, setForm] = React.useState({
        email: '',
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

        const users = JSON.parse(localStorage.getItem('users'))

        const result = users.find(user => user.email === form.email && user.password === form.password)

        if(result) {
            localStorage.setItem('token', true)
            navigate('./Home')
        } else {
            alert('Usuario ou senha invalido!')
        }
    }

    const resetPassword = () => {
        
    }

    return (
        <div className='container'>
            <h2 className="title__login">Login</h2>

            <form className="form-group" onSubmit={handleSubmit}>
                <fieldset className="form-group__login">
                    <label htmlFor="user-email" className="label__text">Usuario</label>
                    <i class="bi bi-envelope-fill login__icon"></i>
                    <input type="email" 
                    id="user-email" 
                    className="user-login" 
                    placeholder="Digite seu usuario" 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    />
                </fieldset>

                <fieldset className="form-group__login">
                    <label htmlFor="password" className="label__text">Senha</label>
                    <i class="bi bi-lock-fill login__icon"></i>
                    <input type="password" 
                    id="password" 
                    className="user-login" 
                    placeholder="Digite uma senha segura"
                    name="password" 
                    value={form.password}
                    onChange={handleChange}
                    />
                </fieldset>

                <Link to="../ResetPassword" className="my-password" onClick={resetPassword}>Esqueci minha senha</Link>

                <button className="btn-login">Entrar</button>

                <p className="registe">Não tem uma conta? <Link to="../SinUp" className="registre-count">Registre-se</Link></p>
            </form>
        </div>
    )
}
 
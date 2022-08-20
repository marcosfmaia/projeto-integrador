import './style.css'

import * as React from "react";
import { Link } from 'react-router-dom'

export default function ResetPassword () {    
    return (
        <div className='container'>
            <form className='form-reset' onSubmit=''>
                <h2 className='title__reset'>Recuperar senha</h2>
                <fieldset className='form-group__reset'>
                    <i class="bi bi-lock-fill email__icon"></i>
                    <input 
                    type="email" 
                    className='reset__pass' 
                    placeholder='Digite sua nova senha'
                    // name='password'
                    // value={form.password
                    />
                </fieldset>

                <button className="btn-reset">RECUPERAR</button>

                <div className="reset-group__previus">
                    <i class="bi bi-arrow-left-short previus__arrow"></i>
                    <Link to="/" className="previus__login">Voltar</Link>
                </div>
            </form>
        </div>
    )
}
import './styles.css';
import './mobile.css';
import logo from '../../assets/logoBookLovers48x48.png';
import iconUser from '../../assets/profile.png';

import * as React from 'react'

import { Link } from 'react-router-dom'


export default function Header() {
    const [filter, setFilter] = React.useState('');

    const handleChange = (e) => {
        setFilter(e.target.value);
    }

    return (
        <header className='header'>
            <Link to="/"> <img className='header__logo' src={logo} alt='Book Lovers'/> </Link>

            <form className='header__form'>            
            <input

                className='header__input'
                placeholder='Digite o que você procura'
                type='text'
                name='filter'
                value={filter}
                onChange={handleChange}
            />
            <button type='submit'className='search'>Buscar</button>
            </form>
            
            <nav className='header__menu'>
                <i class="bi bi-person-fill header__user"></i>
                <Link className='menu__item' to='../../Login'>Login</Link>
                <button className='button__signup'><Link className='button__signup-item' to='../../SinUp'>Cadastre-se</Link></button>
                
            </nav >
        </header >
    );
}
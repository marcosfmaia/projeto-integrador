import './styles.css';
import logo from '../../assets/logoBookLovers48x48.png';
import iconUser from '../../assets/profile.png';
import React from 'react';

export default function Header() {
    const [filter, setFilter] = React.useState('');

    const handleChange = (e) => {
        setFilter(e.target.value);
    }

    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='Book Lovers' href='/../Login' />

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
                <a className='menu__item' href='/../Login'>Login</a>
                <button className='button__signup' href='/../SignUp'><a>Cadastre-se</a></button>
                <a className='menu__item' href='/../Help'>Ajuda</a>
            </nav >
        </header >
    );
}
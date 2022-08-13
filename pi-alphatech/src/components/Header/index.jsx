import './styles.css';
import logo from '../../assets/logoBookLovers160x160';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='Logo do site' />

            <nav className='header__menu'>
                <Link className='menu__item' to='/'>Inicio</Link>
            </nav >
        </header >
    );
}
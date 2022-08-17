import './styles.css';
import logo from '../../assets/logoBookLovers48x48.png';

export default function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='Logo do site' />

            <nav className='header__menu'>
                <a className='menu__item' href='#'>Login</a>
                <button className='button_signup'><a>Cadastre-se</a></button>
                <a className='menu__item' href='#'>Ajuda</a>
            </nav >
        </header >
    );
}
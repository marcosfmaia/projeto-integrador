import './styles.css';
import logo from '../../assets/logoBookLovers48x48.png';

export default function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='Logo do site' />

            <nav className='header__menu'>
                <a className='menu__item' href='#'>Novidades</a>
                <a className='menu__item' href='#'>Mais solicitados</a>
                <a className='menu__item' href='#'>Contato</a>
            </nav >
        </header >
    );
}
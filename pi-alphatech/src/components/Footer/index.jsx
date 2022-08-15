import './styles.css';
import logo from '../../assets/logoBookLovers48x48.png';

export default function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__logo' src={logo} alt='Logo do site' />

            <div className='footer__menu'>
                <a className='menu__item' href='#'>Novidades</a>
                <a className='menu__item' href='#'>Mais solicitados</a>
                <a className='menu__item' href='#'>Contato</a>
            </div>
        </footer>
    );
}
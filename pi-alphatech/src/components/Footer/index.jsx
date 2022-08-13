s (14 sloc)  498 Bytes

import './styles.css';
import logo from '../../assets/logoBookLovers160x160';

export default function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__logo' src={logo} alt='Logo do site' />

            <div className='footer__menu'>
                <a className='menu__item' href='#'>Home</a>
            </div>
        </footer>
    );
}
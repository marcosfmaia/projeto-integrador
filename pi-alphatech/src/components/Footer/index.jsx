import './styles.css';
import logo from '../../assets/logoBookLovers48x48.png';

export default function Footer() {
    return (
        <footer className='footer'>

            <div className='footer__menu'>
                <img className='footer__logo' src={logo} alt='Logo do site' />
            </div>
        </footer>
    );
}
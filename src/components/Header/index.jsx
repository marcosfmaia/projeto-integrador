import './styles.css';
import logo from '../../assets/logoBookLovers48x48.png';

export default function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='Logo do site' />

            <div>            
            <input placeholder='Digite o que você procura' type='text' className='base__input' value=''></input>
            <button type='submit'className='search'>Buscar</button>
            </div>
            
            <nav className='header__menu'>
                <a className='menu__item' href='#'>Login</a>
                <button className='button__signup'><a>Cadastre-se</a></button>
                <a className='menu__item' href='#'>Ajuda</a>
            </nav >
        </header >
    );
}
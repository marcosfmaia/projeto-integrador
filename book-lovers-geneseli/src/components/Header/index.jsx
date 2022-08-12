import './styles.css';

function Header () {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt="logo" />

            <nav className='nav__menu'>
                <a className='menu__item' href=''> Faça Login ou Cadastre-se</a>
            </nav>
        </header>
    )
}


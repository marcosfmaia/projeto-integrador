import './style.css'

export default function Configurations ( { children} ) {
    return (
        <div className='container'>
            {children}

            <div className='configurations__header'>
                <h1 className='title__configurations'>Configurações da Conta</h1>
                <hr className='line'></hr>

    
                <h2 className='title__account'>Conta</h2>
                <img className='title__account__image' src='./assets/profile.png' />
            </div>

            <div className='configurations__main'>
                <h3 className='password'>Senha</h3>
                <button className='password__btn'>Alterar</button>
                <hr className='line__password'></hr>

                <h4 className='email'>Endereço de e-mail</h4>
                <p className='email__text'>Seu endereço de e-mail é digitalhouse@gmail.com</p>
                <button className='email__btn'>Alterar</button>
                <hr className='line__email'></hr>

                <h5 className='disable__account'>Desativar Conta</h5>
                <p className='disable__account__text'>Deseja desativar sua conta?</p>
                <button className='disable__account__btn'>Desativar</button>
                
            </div>

            <div className='configurations__footer'>© BookLovers ©</div>
        </div>


    )
}
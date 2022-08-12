import './style.css'

export default function LoginMain ( { children} ) {
    return (
        <div>
            {children}

            <div className="group-title__login">
                <h2 className="title__login">Já sou cadastrado</h2>
                <h2 className="title__registrer">Não tenho cadastro</h2>
            </div>

            <form action="" className="form-group">
                <fieldset className="form-group__login">
                    <label htmlFor="user-email" className="label__text">Usuario</label>
                    <i class="bi bi-envelope-fill login__icon"></i>
                    <input type="email" id="user-email" className="user-login" placeholder="Digite seu usuario" />
                </fieldset>

                <fieldset className="form-group__login">
                    <label htmlFor="password" className="label__text">Senha</label>
                    <i class="bi bi-lock-fill login__icon"></i>
                    <input type="password" name="pass" id="password" className="user-login" placeholder="Digite uma senha segura"/>
                </fieldset>

                <a href="#" className="my-password">Esqueci minha senha</a>

                <button className="btn-login">Entrar</button>
            </form>
        </div>
    )
}
 
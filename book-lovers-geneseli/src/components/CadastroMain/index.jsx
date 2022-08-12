import './style.css'

export default function CadastroMain ( { children} ) {
    return (
        <div>
            {children}

            <div className="group-title__cadastro">
                <h2 className="title__registrer">Não tenho cadastro</h2>
            </div>

            <form action="" className="form-group">
                <fieldset className="form-group__cadastro">
                    <label htmlFor="user-nome" className="label__text">Nome</label>
                    
                    <input type="nome" id="user-nome" className="user-cadastro" placeholder="Nome Completo" />
                </fieldset>

                <fieldset className="form-group__cadastro">
                    <label htmlFor="user-email" className="label__text">Email</label>
                   
                    <input type="email" id="user-email" className="user-cadastro" placeholder="Digite seu email" />
                </fieldset>

                <fieldset className="form-group__cadastro">
                    <label htmlFor="user-telefone" className="label__text">Telefone</label>
                    
                    <input type="number" name="user-telefone"  placeholder="Digite seu telefone"/>
                </fieldset>

                <fieldset className="form-group__login">
                    <label htmlFor="password" className="label__text">Senha</label>
                    <input type="password" name="pass" id="password" className="user-login" placeholder="Digite uma senha forte"/>
                </fieldset>

        

                <button className="btn-cadastro">Cadastrar</button>
            </form>
        </div>
    )
}
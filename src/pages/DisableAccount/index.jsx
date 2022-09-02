import "./style.css"
import "./mobile.css"

import { Link } from "react-router-dom"
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DisableAccount () {
    return (
        <Container>
            <Header />
            <form className="form-disable-account" onSubmit=" ">
                <h2 className="title-disable-account">Desativar Conta</h2>

                <fieldset className="form-group__reset">
                    <i class="bi bi-lock-fill reset__icon"></i>
                    <input 
                    type="password"
                    className="reset__pass" 
                    placeholder="Confirme sua senha para continuar"
                    />
                </fieldset>

                <button className="btn-disable-account">Desativar</button>

                <div className="reset-group__previus">
                    <i class="bi bi-arrow-left-short previus__arrow"></i>
                    <Link to="/configurations" className="previus__configurations">Voltar</Link>
                </div>
            </form>

            <Footer />
        </Container>
    )
}
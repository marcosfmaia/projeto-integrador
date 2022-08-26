import "./style.css"
import Container from "../../components/Container";
import Header from "../../components/Header";

export default function Help () {
    return (
        <Container>
            <Header />
            <div className="title">
               <h1 className="title-help">Como podemos te ajudar?</h1> 
            </div>

            <div className="box-help-1">
                <h3 className="box-title">Como posso solicitar o empréstimo do livro?</h3>

                <p>Para solicitar o empréstimo do livro você deverá <br />
                    clicar no botão <strong>Saiba mais</strong>. Após isso, você será <br />
                    redirecionado para os detalhes do exemplar, onde <br />
                    você poderá ter acesso ao contato da pessoa que <br />
                    está disponibilizando o livro desejado.            
                </p>
            </div>
        </Container>
    )
}
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

            <div className="card-help-1">
                <h3 className="card-title">Como cadastrar seus livros?</h3>

                <li className="content-list">
                    <ol><strong>1.</strong> Após efetuar seu login, vá até a barra de menu <br />
                    e clique no botão <strong>Cadastre seus livros</strong>;</ol>
                    <br />

                    <ol><strong>2.</strong> Após isso, você será redirecionado para a <br />
                    página de cadastro dos livros;</ol>
                    <br />

                    <ol><strong>3.</strong> Nela você poderá preencher os campos de  <br />
                    título, imagem, descrição e localização do livro <br />
                    que deseja cadastrar; </ol>
                    <br />

                    <ol><strong>4.</strong> Após isso, clique no botão <strong>Cadastrar</strong>. <br />
                    </ol>
                </li>

            </div>

            <div className="card-help-2">
                <h3 className="card-title">Como solicitar o empréstimo do livro?</h3>

                <li className="content-list">
                    <ol><strong>1.</strong> Clique no botão <strong>Saiba mais</strong>;</ol>
                    <br />

                    <ol><strong>2.</strong> Após isso, você será redirecionado para os <br />
                    detalhes do livro;</ol>
                    <br />

                    <ol><strong>3.</strong> Nesse espaço, você terá acesso ao  contato <br />
                    da pessoa que está disponibilizando o livro  <br />
                    desejado; </ol>
                    <br />

                    <ol><strong>4.</strong> A negociação será realizada diretamente entre <br />
                    você e o fornecedor do livro. </ol>
                </li>

            </div>
        </Container>
    )
}
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

                <ol className="content-list">
                    <li><strong>1.</strong> Após efetuar seu login, vá até a barra de menu <br />
                    e clique no botão <strong>Cadastre seus livros</strong>;</li>
                    <br />

                    <li><strong>2.</strong> Após isso, você será redirecionado para a <br />
                    página de cadastro dos livros;</li>
                    <br />

                    <li><strong>3.</strong> Nela você poderá preencher os campos de  <br />
                    título, imagem, descrição e localização do livro <br />
                    que deseja cadastrar; </li>
                    <br />

                    <li><strong>4.</strong> Após isso, clique no botão <strong>Cadastrar</strong>. <br />
                    </li>
                </ol>

            </div>

            <div className="card-help-2">
                <h3 className="card-title">Como solicitar o empréstimo do livro?</h3>

                <ol className="content-list">
                    <li><strong>1.</strong> Clique no botão <strong>Saiba mais</strong>;</li>
                    <br />

                    <li><strong>2.</strong> Após isso, você será redirecionado para os <br />
                    detalhes do livro;</li>
                    <br />

                    <li><strong>3.</strong> Nesse espaço, você terá acesso ao  contato <br />
                    da pessoa que está disponibilizando o livro  <br />
                    desejado; </li>
                    <br />

                    <li><strong>4.</strong> A negociação será realizada diretamente entre <br />
                    você e o fornecedor do livro. </li>
                </ol>

            </div>

            <div className="card-help-3">
                <h3 className="card-title">O empréstimo é gratuito?</h3>
                
                <p className="card-description">
                    Teoricamente sim, entretanto, como a negociação <br />
                    ocorrerá entre fornecedor e usuário, <strong>ficará a critério <br />
                    da pessoa dona do livro,  a inclusão de algum tipo <br />
                    de taxa</strong>. Todo o processo de acordo de empréstimo <br />
                    do livro será realizado entre as partes interessadas. <br />
                    A BookLovers tem como objetivo disponibiizar as <br />
                    informações sobre os livros da vitrine e seus <br />
                    fornecedores.                    
                </p>
                
                   
            </div>
        </Container>
    )
}
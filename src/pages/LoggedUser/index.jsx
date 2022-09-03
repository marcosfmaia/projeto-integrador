import "./styles.css"
import Container from "../../components/Container";
import HeaderLogged from "../../components/HeaderLogged";
import Card from "../../components/Card";
import ModalDetails from "../../components/ModalDetails";
import Footer from "../../components/Footer";
import Mocks from "../../components/Mocks";

export default function Help () {
    return (
        <Container>
            <HeaderLogged />
            <div className="title__page">
            <h1>BookLovers - Ache o livro que você procura aqui!</h1>
            </div>
            
            <div className="card">
            
            <Card/>
            <Card/>
            <Card/>
            <Mocks />
            
            </div>
            
            
            <Footer />
        </Container>
    )
}
import * as React from "react";
import './styles.css';

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";

export default function Home() {

    const [show, setShow] = React.useState(true)


    return (
        <Container>
            <Header />
            <Main>
                <Hours show={show} />
                <button className="btn" onClick={() => setShow(!show)}>Mostrar/Esconder</button>
            </Main>
            <Footer />
        </Container>
    );
}
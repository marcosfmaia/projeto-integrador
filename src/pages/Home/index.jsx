import * as React from "react";
import './styles.css';

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";

export default function Home() {
   

    return (
        <Container>
            <Header />
            <Main />
            <Footer />
        </Container>
    );
}
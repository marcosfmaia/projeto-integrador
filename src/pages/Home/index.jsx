import * as React from "react";
import './styles.css';

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Card from "../../components/Card";
import ModalDetails from "../../components/ModalDetails"

export default function Home() {
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        const getUsers = () => {
            const result = JSON.parse(localStorage.getItem('users'));
            setUsers(result);
        }

        getUsers();

    }, [])

    return (
        <Container>
            <Header />
            <div className="title__page">
            <h1>BookLovers - Ache o livro que você procura aqui!</h1>
            <hr />
            </div>
            


            <div className="card">
            {/* {
                users.map(user => (
                    <p>{user.name}</p>
                ))
            } */}
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>                       
                    
            <Footer />
        </Container>
    );
}
import * as React from "react";
import './styles.css';

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Card";
import ModalDetails from "../../components/ModalDetails"
import Mocks from "../../components/Mocks";

export default function Home() {
    
    /*const [user, setUser] = React.useState([])
    const [users, setUsers] = React.useState([])
    const [showModal, setShowModal] = React.useState(false)

    React.useEffect(() => {
        const getUsers = () => {
            const result = JSON.parse(localStorage.getItem('users'));
            setUsers(result);
        }

        getUsers();
    }, [])

    const handleShowModal = (u) => {
        setShowModal(true)
        setUser(user)
    }*/

    return (
        <Container>
            <Header />
            <div className="title__page">
            <h1>BookLovers - Ache o livro que você procura aqui!</h1>
            </div>
            
            <div className="card">
            
            <Card/>
            <Card/>
            <Card/>
            
            
            {/*
                users.map(u => (
                    <div onClick={() => handleShowModal(u)}>
                    <Card user={u} />
                    </div>
                ))
                */}
            </div>
            {/*showModal && <ModalDetails user={user} setShowModal={setShowModal} />*/}
                      
                    
            <Footer />
        </Container>
    );
}
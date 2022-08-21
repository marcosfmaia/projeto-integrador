import * as React from "react";
import './styles.css';

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";

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
            

            {/* {
                users.map(user => (
                    <p>{user.name}</p>
                ))
            } */}

            <div className="card">
            <div className="card__body">

                <h5 className="card__title">Título do livro</h5>
                <p className="card__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aperiam non veritatis laboriosam ea ipsum tempora! Necessitatibus officia aspernatur reiciendis, perspiciatis quos iste modi. Incidunt dolorem eligendi aliquid sit nam?
                </p>
                <button className="card__btn">Saiba mais</button>
            </div>
            </div>
                       
                    
            <Footer />
        </Container>
    );
}
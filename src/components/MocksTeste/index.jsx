import * as React from 'react'
import book from '../../assets/livro01.webp';
import ModalDetails from '../../components/Card';
import api from '../../services/api'

export default function MocksTeste (props) {

    const [showModal, setShowModal] = React.useState(false);
    const [books, setBooks] = React.useState([])

    React.useEffect(() => {
        const getBooks = async () => {
            const response = await api.get('/books')
            setBooks(response.data)
            console.log(response.data)
        }

        getBooks()
    },[])
    return (
        <div className="card">
                {
                    books.map(book => (
                        <div className="card__body">
                            <img className='img__book' src={book.photo} alt='Livro' />
                            <h5 className="card__title">{book.title}</h5>
                            <h4 className="card__subtitle">{book.genre}</h4><br></br>
                            <h3>Descrição</h3>
                            <p className="card__description">{book.description}</p><br></br>
                            <button href="#" className="card__btn" onClick={() => setShowModal(true)}>Saiba mais</button>
                        </div>
                    ))
                }
                {showModal && <ModalDetails user={props.user} setShowModal={setShowModal} />}
        </div>
    )
}
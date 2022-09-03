import './style.css'
import './mobile.css'

import * as React from "react";

import img from '../../assets/upload.png'

import HeaderLogged from "../../components/HeaderLogged";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Cep from '../../components/Cep';
import api from '../../services/api';
import { getBase64 } from '../../services/base64';


export default function RegisterBks () {
    
    const [books, setBooks] = React.useState([])
    const [form, setForm] = React.useState({
        title: '',
        genre: '',
        photo: '',
        description: ''
    })

    const [warning, setWarning] = React.useState({
        show: false,
        message: ''
    });

    const getBooks = async () => {
        const response = await api.get('/books')
        setBooks(response.data)
        console.log(response.data)
    }

    React.useEffect(() => {
        getBooks()
    },[])

    const handleChange = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onChangeImage = async (e) => {
        const photo = await getBase64(e.target.files[0])
        console.log(photo);
        setForm((old) => ({ ...old, photo: photo}))
    }

    const validation = (data) => {
        for(const key in data) {
            if(['', 0, null].includes(data[key])) {
                return false
            }
        }
        return true
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(validation(form)) {
            await api.post('/books',
            { title: form.title, genre: form.genre, photo: form.photo, description: form.description })
            await getBooks()
            setForm({
                title: '',
                genre: '',
                description: ''
            })
            setWarning({
                show: true,
                message: 'Livro cadastrado com sucessso'
            });
            setTimeout(() => {
                setWarning({
                    show: false,
                    message: ''
                });
            }, 10000);
        } else {
            setWarning({
                show: true,
                message: 'Preencha todos os campos'
            });
            setTimeout(() => {
                setWarning({
                    show: false,
                    message: ''
                });
            }, 3000);
       }
    }

    return(
        <Container>
            <HeaderLogged />

           <h2 className="title__register">Cadastre seus livros</h2>

            <form className="register__books" onSubmit={handleSubmit}>  
                <div className="content__info">
                    <div className='content__info-title'>
                        <label htmlFor="title" className="title__book">Titulo do livro:</label>
                        <input type="text" 
                        className='input__title-boook'
                        placeholder='Digite o titulo'
                        id='title'
                        name='title'
                        value={form.title}
                        onChange={handleChange}
                        />
                    </div>

                    <div className='content__info-title'>
                        <label htmlFor="genre" className="title__book">Gênero/Área de Conhecimento:</label>
                        <input type="text" 
                        className='input__title-boook'
                        placeholder='Digite o gênero do livro'
                        id='genre'
                        name='genre'
                        value={form.genre}
                        onChange={handleChange}
                        />
                    </div>
                    <figure className="content-image__book">

                        <img 
                        className="img__upload"
                        src={form.photo === "" ? img : `data:image/jpeg;base64,${form.photo}`} 
                        alt="imagem do livro" />



                        <label htmlFor="file" className='choose__file-book'>Escolher imagem</label>
                        <input type="file" 
                        accept='image/' 
                        id='file' 
                        className='file__image-book'
                        name='photo'
                        onChange={onChangeImage}/>
                    </figure>



                    <div className='description-book'>
                        <label htmlFor='description' className="title__book description__text-book">Digite a descrição do livro:</label>

                        <textarea 
                        id='description' 
                        className='input__description-book' 
                        placeholder='Escreva a sinopse do seu livro'
                        name='description'
                        value={form.description}
                        onChange={handleChange}>
                        </textarea>
                    </div>
                </div>

                {warning.show && <p className='register__failed'>{warning.message}</p>}

                <div className="content__location">
                    <h4 className="subtitle__book subtitle__location">
                        <span className="icon">
                            <i class="bi bi-geo-alt-fill location__icon"></i>
                        </span>
                        Localização 
                    </h4>

                    <h5 className="origin__location">Origem:</h5>
                    <p  className='location-origin__book'>Local de origem do livro</p>
                </div>

                <Cep />

                <div className='content__btn'>
                    <button className="btn-register__book">Cadastrar</button>
                </div>
            </form>

            <Footer />
        </Container>
    )
}
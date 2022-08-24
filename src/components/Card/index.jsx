import './styles.css'
import livro from '../../assets/livro01.webp';

export default function Card() {
    return (
        <div className="card">
        <div className="card__body">
            
        <img className='img__livro' src={livro} alt='Livro' />
            <h5 className="card__title">Título do livro</h5>
            <h4 className="card__subtitle">Gênero/Área de Conhecimento</h4><br></br>
            <h3>Descrição</h3>
            <p className="card__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aperiam non veritatis laboriosam ea ipsum tempora! Necessitatibus officia aspernatur reiciendis, perspiciatis quos iste modi. Incidunt dolorem eligendi aliquid sit nam?
            </p><br></br>
            <button className="card__btn">Saiba mais</button>
        </div>
        </div>
    )
}
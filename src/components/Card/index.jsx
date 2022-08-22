import './styles.css'

export default function Card() {
    return (
        <div className="card">
        <div className="card__body">
            
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
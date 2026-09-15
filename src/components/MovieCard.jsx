import { Link } from "react-router-dom"
import './MovieCard.css'

function MovieCard(props) {
  return (
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w500${props.filme.poster_path}`} alt={props.filme.title} />
            <div className="card-info">
                <h2>{props.filme.title}</h2>
                <p>{props.filme.vote_average.toFixed(1)}</p>
                <Link to={`/filme/${props.filme.id}`}>
                    <button>Ver Detalhes do Filme</button>
                </Link>
            </div>
        </div>
  )
}

export default MovieCard


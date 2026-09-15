import {useParams} from 'react-router-dom'
import {useState, useEffect} from "react"
import './MovieDetails.css'

function MovieDetails() {

    const [detalhesFilmes, setDetalhesFilmes] = useState(null)
    const [detalhesCarregamento, setDetalhesCarregamento] = useState(true)
    const [detalhesErro, setDetalhesErro] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        async function buscarFilmes() {
        try {
            setDetalhesCarregamento(true);
            const resposta = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR`)
            const dados = await resposta.json()
            setDetalhesFilmes(dados)

        } catch (erro){
            setDetalhesErro("Erro na API")

        } finally {
            setDetalhesCarregamento(false)
      
        }
    }
    buscarFilmes() 
    }, [])

    if(detalhesCarregamento){
        return(
            <h1>Carregando...</h1>
        )
    }
     if(detalhesErro){
        return(
            <h1>{detalhesErro}</h1>
        )
    }
    return (
     <div className="detalhes-container">
        <img className="detalhes-poster"
            src={`https://image.tmdb.org/t/p/w500${detalhesFilmes.poster_path}`} alt={detalhesFilmes.title}/>
        <div className="detalhes-info">
            <h1>{detalhesFilmes.title}</h1>
            <p>{detalhesFilmes.overview}</p>
            <p className="detalhes-nota">{detalhesFilmes.vote_average.toFixed(1)}</p>
        </div>
     </div>
    )

}

export default MovieDetails


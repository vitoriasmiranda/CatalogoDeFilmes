import {useState, useEffect} from "react"
import MovieCard from "../components/MovieCard"
import './Home.css'

function Home() {

    const [filmes, setFilmes] = useState([])
    const [carregamento, setCarregamento] = useState(true)
    const [erro, setErro] = useState(null)
    const [termoBusca, setTermoBusca] = useState("")

    async function buscarFilmes() {
        try {
            setCarregamento(true);
            const resposta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR`)
            const dados = await resposta.json()
            setFilmes(dados.results)

        } catch (erro){
            setErro("Erro na API")

        } finally {
            setCarregamento(false)
      
        }
    }

    useEffect(() => {
        buscarFilmes() 
    }, [])

    async function buscarPorTermo(){
        const resposta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR&query=${termoBusca}`)
        const dados = await resposta.json()
        setFilmes(dados.results)

    }
   
    if(carregamento){
        return(
            <h1>Carregando...</h1>
        )
    }
     if(erro){
        return(
            <h1>{erro}</h1>
        )
    }
    return (
    <div className="home-container">
        <div className="busca-container">
            <button className="busca-botao" onClick={buscarFilmes}>Populares</button>
            <input className="busca-input" value={termoBusca} 
            onChange={ e => setTermoBusca(e.target.value)} 
            onKeyDown={ e => { if (e.key === "Enter") {buscarPorTermo()}} }
            /> 
            <button className="busca-botao" onClick={buscarPorTermo}>Buscar</button>
            
        </div>

        <div className="filmes-grid">
            { filmes.map(filme => (
            <MovieCard filme={filme} key={filme.id} />
            )) }
        </div>
    </div>
)
}

export default Home
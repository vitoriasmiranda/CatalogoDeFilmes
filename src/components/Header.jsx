import { Link } from "react-router-dom";
import './Header.css'

function Header(props) {
  function alternarTemaClick() {
  props.alternarTema(!props.temaClaro)
}
  return (
    <div className="header">
       <Link className="header-logo" to="/">Catálogo de Filmes</Link>
       <button onClick={alternarTemaClick}>🌙 / ☀️</button>
    </div>
   
  )
}

export default Header
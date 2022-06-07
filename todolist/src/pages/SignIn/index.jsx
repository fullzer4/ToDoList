import { useState } from "react"
import {Link} from "react-router-dom"
import "./signin.css"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e){
    e.preventDefault()
  }

  return (
    <div id="pagina">
      <div className="formulario">
        <h1 id="Titulo">Sign in</h1>
        <form onSubmit={handleSubmit} id="campos">
          <input id="campos-inserir" type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input id="campos-inserir" type="password" placeholder="senha"  value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Acessar</button>
        </form>

        <Link to="/register">criar uma conta</Link>
      </div>
    </div>
  );
}



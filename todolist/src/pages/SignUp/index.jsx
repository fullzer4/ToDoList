import { useState, useContext } from "react"
import {Link} from "react-router-dom"
import { AuthContext } from "../../contexts/auth"
import "./signup.css"


export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nome, setNome] = useState("")

  const { signUp } = useContext(AuthContext)

  function handleSubmit(e){
    e.preventDefault()
    if(nome !== "" && email !== "" && password !== ""){
      signUp(email, password, nome)
    }
  }

  return (
    <div id="pagina">
      <div className="formulario-signup">
        <h1 id="Titulo-signup">Sign up</h1>
        <form onSubmit={handleSubmit} id="campos-signup">
          <input type="text" id="campos-inserir-signup-1" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
          <input type="email" id="campos-inserir-signup-2" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" id="campos-inserir-signup-3" placeholder="senha"  value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div className="links-signup">
            <button type="submit" id="criar-signup">Criar Conta</button>
            <Link to="/" id="logar-signup">Logar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

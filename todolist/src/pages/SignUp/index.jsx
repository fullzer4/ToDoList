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
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
        <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="senha"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Acessar</button>
      </form>

      <Link to="/">Logar</Link>
    </div>
  );
}

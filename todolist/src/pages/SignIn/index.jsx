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
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="senha"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Acessar</button>
      </form>

      <Link to="/register">criar uma conta</Link>
    </div>
  );
}



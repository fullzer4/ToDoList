import { useState , useContext} from "react"
import {Link} from "react-router-dom"
import "./signin.css"
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn, loadingAuth} = useContext(AuthContext);

  function handleSubmit(e){
    e.preventDefault()

    if(email !== '' && password !== ''){
      signIn(email, password)
    }
  }

  return (
    <div id="pagina">
      <div className="formulario-signin">
        <h1 id="Titulo-signin">Sign in</h1>
        <form onSubmit={handleSubmit} id="campos-signin">
          <input id="campos-inserir-signin-1" type="email" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input id="campos-inserir-signin-2" type="password" placeholder="senha"  value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div className="links-signin">
            <button type="submit" id="Acessar-signin">{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
            <Link to="/register" id="Criar-conta-signin">Criar uma conta</Link>
          </div>
        </form>
      </div>
    </div>
  );
}



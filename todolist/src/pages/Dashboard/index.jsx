import { useContext } from "react"
import { AuthContext } from "../../contexts/auth" 
import "./dashboard.css"

export default function Dashboard(){
  const { signOut , user} = useContext(AuthContext)
  return(
    <div id="pagina-dashboard">
      <div className="Header-dashboard">
        <button id="logout" onClick={() => signOut()}>LogOut</button> 
        <h1 id="titulo-dashboard">ToDoList</h1>
        <h2 id="user-header">{user.nome}</h2>
      </div>
      <form>
        <label>Titulo</label>
        <input type="text"></input>
        <label>Tarefa</label>
        <input type="text"></input>
        <label>Hora</label>
        <input type="time"></input>
        <label>Dia</label>
        <input type="date"></input>
        <button>Criar Tarefa</button>
      </form>
    </div>
  )
}
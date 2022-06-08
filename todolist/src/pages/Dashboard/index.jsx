import { useContext , useState} from "react"
import { AuthContext } from "../../contexts/auth" 
import "./dashboard.css"

export default function Dashboard(){
  const [titulo, setTitulo] = useState("")
  const [tarefa, setTarefa] = useState("")
  const [hora, setHora] = useState("")
  const [dia, setDia] = useState("")


  const { signOut , user} = useContext(AuthContext)

  function handlecreate(e){
    e.preventDefault()
    console.log(titulo);
    console.log(tarefa);
    console.log(hora);
    console.log(dia);
  }

  return(
    <div id="pagina-dashboard">
      <div className="Header-dashboard">
        <button id="logout" onClick={() => signOut()}>LogOut</button> 
        <h1 id="titulo-dashboard">ToDoList</h1>
        <h2 id="user-header">{user.nome}</h2>
      </div>
      <form onSubmit={handlecreate}>
        <label>Titulo</label>
        <input type="text" value={titulo} onChange={(e)=> setTitulo(e.target.value)}></input>
        <label>Tarefa</label>
        <input type="text" value={tarefa} onChange={(e)=> setTarefa(e.target.value)}></input>
        <label>Hora</label>
        <input type="time" value={hora} onChange={(e)=> setHora(e.target.value)}></input>
        <label>Dia</label>
        <input type="date" value={dia} onChange={(e)=> setDia(e.target.value)}></input>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  )
}
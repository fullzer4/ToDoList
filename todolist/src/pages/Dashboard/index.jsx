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
      <form onSubmit={handlecreate} id="form-tarefas">
        <div className="teste">
          <div className="testes">
            <label>Titulo</label>
            <label>Tarefa</label>
          </div>
          <div className="testes">
            <input type="text" value={titulo} onChange={(e)=> setTitulo(e.target.value)}></input>
            <input type="text" value={tarefa} onChange={(e)=> setTarefa(e.target.value)}></input>
          </div>
        </div>
        <div className="teste">
          <div className="testes">
            <label>Hora</label>
            <label>Dia</label>
          </div>
          <div className="testes">
            <input type="time" value={hora} onChange={(e)=> setHora(e.target.value)}></input>
            <input type="date" value={dia} onChange={(e)=> setDia(e.target.value)}></input>
          </div>
        </div>
        <button type="submit">Criar Tarefa</button>
      </form>
      <div>
        <h3>Tarefas:</h3>
      </div>
    </div>
  )
}
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
        <div className="container-inputs">
          <div className="labels">
            <label>Titulo</label>
            <label>Tarefa</label>
          </div>
          <div className="inputs-c">
            <input type="text" className="input-texto" value={titulo} onChange={(e)=> setTitulo(e.target.value)}></input>
            <input type="text" className="input-texto" value={tarefa} onChange={(e)=> setTarefa(e.target.value)}></input>
          </div>
        </div>
        <div className="container-inputs">
          <div className="labels">
            <label>Hora</label>
            <label>Dia</label>
          </div>
          <div className="inputs-c">
            <input type="time" value={hora} id="input-hora" onChange={(e)=> setHora(e.target.value)}></input>
            <input type="date" value={dia} id="input-dia" onChange={(e)=> setDia(e.target.value)}></input>
          </div>
        </div>
        <button type="submit" id="submit-tarefa">Criar Tarefa</button>
      </form>
      <div>
        <h3>Tarefas:</h3>
      </div>
    </div>
  )
}
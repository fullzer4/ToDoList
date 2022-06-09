import { useContext , useState, useEffect} from "react"
import { toast } from "react-toastify"
import { AuthContext } from "../../contexts/auth" 
import firebase from "../../services/firebaseConnection"
import "./dashboard.css"

export default function Dashboard(){
  const [titulo, setTitulo] = useState("")
  const [tarefa, setTarefa] = useState("")
  const [hora, setHora] = useState("")
  const [dia, setDia] = useState("")
  const [tarefas, setTarefas] = useState([])


  const { signOut , user} = useContext(AuthContext)

  useEffect(()=>{
    async function buscaTarefa(){
      await firebase.firestore().collection("users").doc(user.uid).collection("tarefas")
      .onSnapshot((doc)=>{
        let minhasTarefas = []

        doc.forEach((item)=>{
          minhasTarefas.push({
            id: item.id,
            titulo: item.data().titulo,
            tarefa: item.data().tarefa,
            dia: item.data().dia,
            hora: item.data().hora,
          })
        })
        setTarefas(minhasTarefas)
      })
    }
    buscaTarefa()
  })

  async function handlecreate(e){
    e.preventDefault()
    if(dia !== "" && hora !=="" && tarefa !=="" && titulo !==""){
      await firebase.firestore().collection("users").doc(user.uid).collection("tarefas")
      .add({
        titulo: titulo,
        tarefa: tarefa,
        hora: hora,
        dia: dia
      })
      .then(()=>{
        setTitulo("")
        setTarefa("")
        setHora("")
        setDia("")
        toast.info("Criado com sucesso")
      })
      .catch((error)=>{
        console.log(error);
        toast.error("Verifique os campos")
      })
    }else{
      toast.error("Verifique os campos")
    }
  }
    
  async function excluir(id){
    await firebase.firestore().collection("users").doc(user.uid).collection("tarefas").doc(id)
    .delete()
    .then(()=>{
      toast.info("Deletado com sucesso")
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return(
    <div id="pagina-dashboard">
      <div className="Header-dashboard">
        <button id="logout" onClick={() => signOut()}>LogOut</button> 
        <h1 id="user-header">User: {user.nome}</h1>
      </div>
      <form onSubmit={handlecreate} id="form-tarefas">
        <div className="container-inputs">
          <div className="labels">
            <label>Title</label>
            <label>Task</label>
          </div>
          <div className="inputs-c">
            <input type="text" className="input-texto" placeholder="ex: Job" value={titulo} onChange={(e)=> setTitulo(e.target.value)}></input>
            <input type="text" className="input-texto" placeholder="ex: Coding" value={tarefa} onChange={(e)=> setTarefa(e.target.value)}></input>
          </div>
        </div>
        <div className="container-inputs">
          <div className="labels">
            <label>Hour</label>
            <label>Day</label>
          </div>
          <div className="inputs-c">
            <input type="time" value={hora} id="input-hora" onChange={(e)=> setHora(e.target.value)}></input>
            <input type="date" value={dia} id="input-dia" onChange={(e)=> setDia(e.target.value)}></input>
          </div>
        </div>
        <button type="submit" id="submit-tarefa">Create Task</button>
      </form>
      <div className="container-tarefas">
        <h3 id="tarefas">Your Tasks:</h3>
        <div>
          <ul>
            {tarefas.map((itens)=>{
              return(
                <li key={itens.id}>
                  <span>{itens.titulo}</span>
                  <span>{itens.tarefa}</span>
                  <span>{itens.hora}</span>
                  <span>{itens.dia}</span>
                  <button onClick={()=> excluir(itens.id)}>Finalizar</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
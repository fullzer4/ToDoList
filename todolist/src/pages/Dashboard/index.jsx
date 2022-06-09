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
  const [loadingEx, setLoadingEx] = useState(false)
  const [loadingCr, setLoadingCr] = useState(false)


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
      setLoadingCr(true)
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
        setLoadingCr(false)
      })
      .catch((error)=>{
        console.log(error);
        toast.error("Verifique os campos")
        setLoadingCr(false)
      })
    }else{
      toast.error("Verifique os campos")
      setLoadingCr(false)
    }
  }
    
  async function excluir(id){
    setLoadingEx(true)
    await firebase.firestore().collection("users").doc(user.uid).collection("tarefas").doc(id)
    .delete()
    .then(()=>{
      toast.info("Deletado com sucesso")
      setLoadingEx(false)
    })
    .catch((error)=>{
      console.log(error);
      setLoadingEx(false)
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
        <button type="submit" id="submit-tarefa">{loadingCr ? "loading..." : "Create Task"}</button>
      </form>
      <div className="container-tarefas">
        <h3 id="tarefas">Your Tasks:</h3>
        <ul id="tarefas-box">
          {tarefas.map((itens)=>{
            return(
              <li key={itens.id} className="box-tarefa">
                  <span id="tarefa-titulo">{itens.titulo}</span>
                  <div className="divisor"></div>
                  <span id="tarefa-tarefa">{itens.tarefa}</span>
                  <div id="times">
                    <span id="tarefa-hora">{itens.hora}</span>
                    <span id="tarefa-dia">{itens.dia}</span>
                  </div>
                  <div className="divisor"></div>
                  <button id="tarefa-excluir" onClick={()=> excluir(itens.id)}>{loadingEx ? "loading..." : "remove"}</button>
                </li>
              )
            })}
          </ul>
      </div>
    </div>
  )
}
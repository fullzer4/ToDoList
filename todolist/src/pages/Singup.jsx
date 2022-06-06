import {useState} from "react"
import firebase from "../firebaseConnection"

function Singup() {
  const [email, setEmail] =useState("")
  const [senha, setSenha] =useState("")

  async function novoUsuario(){ //criar novo usuario
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(()=>{
      setEmail("")
      setSenha("")
      
    })
    .catch((error) =>{ //erro
      if(error.code === "auth/weak-password"){
        alert("senha muito fraca")
      }else if(error.code === "auth/email-already-in-use"){
        alert("email ja existe")
      }
      else if(error.code === "auth/invalid-email"){
        alert("email invalido")
      }

    })
  }

  return (
    <div className="Box-Login">
      <label>Email</label>
        <input type="text" value={email} onChange={ (e)=> setEmail(e.target.value)}/><br/>
        <label>Senha</label>
        <input type="password" value={senha} onChange={ (e)=> setSenha(e.target.value)}/><br/>
        <button onClick={novoUsuario}>Cadastrar</button><br/>
    </div>
  );
}

export default Singup;

import { AuthGoogleContext } from "../../context/authGoogle"
import { useContext, Component } from "react"
import { Navigate } from "react-router-dom";

export const Home = () => {
  var {user} = useContext(AuthGoogleContext)

  function voltar(){
    console.log("Foi")
    return <Navigate to="/"/>
  }

  let userLogado = JSON.parse(user)
  console.log(userLogado);
  
  class HomeC extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.singOut.bind(this);
      
    }
    singOut() {
      sessionStorage.clear()
      voltar()
    }  
    
    render(){
      return (
        <div>
          <h1>Bem vindo {userLogado.displayName}</h1>
          <button onClick={this.singOut}>Sair</button>
        </div>
      )
    }
  }

  return(
    <HomeC/>
  )

}
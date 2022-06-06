import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
export default function Dashboard(){
  const { signOut } = useContext(AuthContext)
  return(
    <div>
      <h1>PAGINA DASHBOARD</h1>
      <button onClick={() => signOut()}>LogOut</button>
    </div>
  )
}
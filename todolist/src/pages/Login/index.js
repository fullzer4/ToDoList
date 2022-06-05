import { AuthGoogleContext } from "../../context/authGoogle";
import { useContext } from "react" 
import { Navigate } from "react-router-dom";

export const Login = () => {   
    const { signInGoogle, signed} = useContext(AuthGoogleContext)

    async function loginGoogle() {
        await signInGoogle()
    }
    if(!signed) { 
        return <button onClick={loginGoogle}>Logar com a google</button>;
    } else {
        return <Navigate to="/Home"/>
    }

  }
import { useState, createContext, useEffect } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../services/firebaseconfig";
const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({})

export const AuthGoogleProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebse:token")
            const sessionUser = sessionStorage.getItem("@AuthFirebse:user")
            if(sessionToken && sessionUser) {
                setUser(sessionUser)
            }
        }
        loadStoreAuth()
    }, [])

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user)
                sessionStorage.setItem("@AuthFirebse:token", token )
                sessionStorage.setItem("@AuthFirebse:user", JSON.stringify(user))

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;  
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    return (
        <AuthGoogleContext.Provider value={{signInGoogle, signed: !!user, user}}>
            {children}
        </AuthGoogleContext.Provider>
    )
}
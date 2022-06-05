<<<<<<< HEAD
import { AuthGoogleProvider } from "./context/authGoogle"
import { AppRoutes } from "./routes/routes"

export const App = () => {
  return (
    <AuthGoogleProvider>
      <AppRoutes/>
    </AuthGoogleProvider>
  )
}
=======
import React, { Component} from 'react';
import "./styles/reset.css";
import "./styles/App.css";
import Titulo from "./components/titulo/titulo"

class App extends Component {
    render() {
        return(
            <div id="pagina">
                <Titulo/>
            </div>
        )
    }
}

export default App;
>>>>>>> b43a161d97953955fcb5cae839c4ff3d6dff0137

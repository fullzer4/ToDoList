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
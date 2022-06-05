import { BrowserRouter, Routes, Route} from "react-router-dom"
import { PrivateRoutes } from "."
import { Home } from "../pages/Home/index"
import { Login } from "../pages/Login/index"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Home" element={<PrivateRoutes/>}>
                    <Route path="/Home" element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
  }
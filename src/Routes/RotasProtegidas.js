import { Navigate, Outlet } from "react-router-dom";
import Api from "../Services/api";
import Rotas from "./Rotas";

const userService = new Api()

const RotasProtegidas = ({children}) => {
    //console.log('children', children)

    //const usuarioAutenticado = userService.usuarioAutenticado()
    let usuarioAutenticado = true

    return usuarioAutenticado ? children : <Navigate to='login' />
    
}

export default RotasProtegidas
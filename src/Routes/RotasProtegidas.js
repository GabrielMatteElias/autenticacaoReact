import { Navigate, Outlet } from "react-router-dom";
import Api from "../Services/api";
import Rotas from "./Rotas";

const userService = new Api()

const RotasProtegidas = () => {
    console.log('children', children)
    const usuarioAutenticado = userService.usuarioAutenticado()
    return usuarioAutenticado ? children : <Rotas />
    
}

export default RotasProtegidas
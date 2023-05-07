import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Menu from "../Pages/Menu/Menu";
import RotasProtegidas from "./RotasProtegidas";
import Processos from "../Pages/Processos/Processos";
import Negociacao from "../Pages/Negociacao/Negociacao";
import Final from "../Pages/Final/Final";


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />

                <Route path="" element={<RotasProtegidas> <Menu /> </RotasProtegidas>} >
                    <Route path="negociacao"  element={<RotasProtegidas> <Negociacao /> </RotasProtegidas>}/>
                    <Route path="processos"  element={<RotasProtegidas> <Processos /> </RotasProtegidas>}/>
                </Route>

                <Route path="/final" element={<Final />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
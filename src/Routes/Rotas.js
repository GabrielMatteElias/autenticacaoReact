import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Menu from "../Pages/Menu/Menu";
import RotasProtegidas from "./RotasProtegidas";


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/teste" element={<h1>TESTE</h1>} />

                <Route
                    path="menu"
                     element={
                        <RotasProtegidas>
                            <Menu />
                        </RotasProtegidas>
                    } >
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
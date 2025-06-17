import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Produtos from "../pages/Produtos.jsx";
import { Header } from "../header/Header.jsx";
import { Footer } from "../footer/Footer.jsx";
import { Categorias } from "../pages/Categorias.jsx";
import { MeusPedidos } from "../pages/MeusPedidos.jsx";

function Paths() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/produtos"} element={<Produtos />} />
                    <Route path={"/categorias"} element={<Categorias />} />
                    <Route path={"/meusPedidos"} element={<MeusPedidos />} />

                    <Route path={"/*"} element={<h2> <br /><br /><br /><br /><br /><br />Página não encontrada</h2>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Paths;

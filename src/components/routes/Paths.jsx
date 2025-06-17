import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Produtos from "../pages/Produtos.jsx";
import { Header } from "../header/Header.jsx";
import { Footer } from "../footer/Footer.jsx";

function Paths() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/produtos"} element={<Produtos />} />
                    <Route path={"/*"} element={<h2>Página não encontrada</h2>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Paths;

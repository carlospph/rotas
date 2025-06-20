import { NavLink } from "react-router-dom"
import './Header.css';
import { ActionUser } from "../actionUser/ActionUser";
 
export const MobileMenu = () => {

    return (
        <ul className="mobile-menu">
            <li>
                <NavLink className="link" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="link" to="/Produtos">Produtos</NavLink>
            </li>
            <li>
                <NavLink className="link" to="/Categorias">Categorias</NavLink>
            </li>
            <li>
                <NavLink className="link" to="/MeusPedidos">Meus pedidos</NavLink>
            </li>

            <li>
                <ActionUser/>
            </li>
        </ul> 
    )
  }
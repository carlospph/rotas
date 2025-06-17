import { NavLink } from "react-router-dom"
import './Header.css';

import styled from 'styled-components';

const Container = styled.div`
    margin-top: 1.3em;
    width: 100%;
`;
 
export const DesktopMenu = () => {

    return (
        <Container>
        <ul className="desktop-menu">
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
        </ul> 
        </Container>
    )
  }
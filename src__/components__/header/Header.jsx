import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {

    return (

        <header className={styles.container}>


            <faTerminal />

            <nav>
                <ul className={styles.menu}>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/produtos">Produtos</Link></li>
                <li> <Link to="/categorias">Categorias</Link></li>
                <li> <Link to="/meusPedidos">Meus Pedidos</Link></li>
                </ul>
            </nav>

            <div className={styles.input__computer}>
                <input type="text" placeholder="Pesquisar produtos" />
            </div>
        </header>

    )
}

import { Link } from "react-router-dom";
import styles from "./Header.module.css"

export function Header() {

    return (

        <header className={styles.container}>
            <nav>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/produtos">Produtos</Link></li>
            </nav>
        </header>

    )
}

import { Link } from "react-router-dom";
import styles from "./ActionUser.module.css";

export const ActionUser = () => {
	return(
		<div className={styles.dflex}>
			 <Link to="/NewUser" className={styles.link}> Cadastre-se</Link>
			 <Link to="/Login" className={styles.btn}> Entrar </Link>
		</div>
	)
}
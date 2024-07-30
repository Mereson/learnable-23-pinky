import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
export const Navbar = () => {
	return (
		<nav className={styles.container}>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/dashboard">Dashboard</NavLink>
				</li>
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
			</ul>
		</nav>
	);
};

import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { HomeIcon, logo, SearchIcon } from "../../assets";

export const Navbar = () => {
	return (
		<nav className={styles.container}>
			<img src={logo} alt="logo" className={styles.logo} />
			<ul>
				<li className={styles.linkItem}>
					<HomeIcon className={styles.homeIcon} />
					<NavLink to="/">Home</NavLink>
				</li>
				<li className={styles.linkItem}>
					<SearchIcon />
					<NavLink to="/dashboard">Dashboard</NavLink>
				</li>
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
			</ul>
		</nav>
	);
};

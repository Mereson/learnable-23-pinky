import { useState } from "react";
import { demolmage } from "../../assets";
import { Navbar } from "../../components";
import styles from "./styles.module.css";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api";

export const Home = () => {
	const [people, setPeople] = useState(null);

	useEffect(() => {
		axios
			.get(`${BASE_URL}/people`)
			.then((res) => setPeople(res?.data?.results))
			.catch((err) => console.log(err));
	}, []);

	console.log(people);
	return (
		<div className={styles.container}>
			<Navbar />
			<img src={demolmage} alt="demoimage" className={styles.pageImg} />
			<h1>Home</h1>
			{people
				? people?.map((person) => (
						<div key={person?.name}>
							<h4>{person?.name}</h4>
						</div>
						// eslint-disable-next-line no-mixed-spaces-and-tabs
				  ))
				: "Nobody to display"}
		</div>
	);
};

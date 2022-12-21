import { Link, NavLink } from "react-router-dom";
import burger from "../assets/icon-hamburger.svg";
export default function Header({ activeNav, setActiveNav }) {
	const planets = [
		"Mercury",
		"Venus",
		"Earth",
		"Mars",
		"Jupiter",
		"Saturn",
		"Uranus",
		"Neptune",
	];

	return (
		<>
			<header>
				<div className={activeNav ? "active" : ""}>
					<Link to={`/`}>
						<h2>PLANETS</h2>
					</Link>

					<button
						className="burger"
						onClick={() => setActiveNav((old) => !old)}
					>
						<img src={burger} alt="burger" />
					</button>

					<nav>
						<ul>
							{(planets || []).map((planet) => (
								<li key={planet}>
									<NavLink
										to={`/planet/${planet}`}
										className={({ isActive }) => (isActive ? "active" : "")}
										onClick={() => setActiveNav(false)}
									>
										{planet}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}

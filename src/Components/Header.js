import { Link, NavLink } from "react-router-dom";
import burger from "../assets/icon-hamburger.svg";
export default function Header() {
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
				<div>
					<Link to={`/`}>
						<h2>PLANETS</h2>
					</Link>

					<nav>
						<ul>
							{(planets || []).map((planet) => (
								<li key={planet}>
									<NavLink
										to={`/planet/${planet}`}
										className={({ isActive }) => (isActive ? "active" : "")}
									>
										{planet}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					<button className="burger">
						<img src={burger} alt="burger" />
					</button>
				</div>
			</header>
		</>
	);
}

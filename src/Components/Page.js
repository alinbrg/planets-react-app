import { useState } from "react";
import Header from "./Header";

export default function Page({ children }) {
	const [activeNav, setActiveNav] = useState(false);

	return (
		<>
			<main>
				<Header activeNav={activeNav} setActiveNav={setActiveNav} />
				{!activeNav && children}
			</main>
		</>
	);
}

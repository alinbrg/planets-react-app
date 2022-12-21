import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Planet from "./Routes/Planet";
import Home from "./Routes/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/planet/:planetName" element={<Planet />} />
		</Routes>
	);
}

export default App;

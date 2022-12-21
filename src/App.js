import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Planet from "./Routes/Planet";
import Home from "./Routes/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/planet/:planetName" element={<Planet />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

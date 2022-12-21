import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Page from "../Components/Page";
import PlanetSection from "../Components/PlanetSection";

import data from "../data.json";

export default function Planet() {
	const { planetName } = useParams();
	const [dataToUse, setDataToUse] = useState(null);

	// const dataToUse = data.find((el) => el.name === planetName);

	useEffect(() => {
		setDataToUse(data.find((el) => el.name === planetName));
	}, [planetName]);

	return (
		<>
			<Page>
				<PlanetSection dataToUse={dataToUse} />
			</Page>
		</>
	);
}

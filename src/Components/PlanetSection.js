import { useEffect, useState } from "react";
import sourceIcon from "../assets/icon-source.svg";
export default function PlanetSection({ dataToUse }) {
	const [imgSrc, setImgSrc] = useState("");
	const [secImgSrc, setSecImgSrc] = useState("");
	const [desc, setDesc] = useState("");
	const [source, setSource] = useState("");

	const [btnData, setBtnData] = useState([]);

	function showOverview(e) {
		e.stopPropagation();

		const id = e.target.dataset.btnId;
		const planetDesc = dataToUse[id]?.content;

		const sourceLink = dataToUse[id]?.source;

		if (id === "geology") {
			const secImg = dataToUse?.images[id];
			setImgSrc(dataToUse?.images?.overview);
			setSecImgSrc(secImg);
		} else {
			const newImgSrc = dataToUse?.images[e.target.dataset.btnId];
			setImgSrc(newImgSrc);
			setSecImgSrc("");
		}

		setDesc(planetDesc);
		setSource(sourceLink);

		const newBtnData = btnData.map((btn) => {
			return btn.id === id
				? { ...btn, active: true }
				: { ...btn, active: false };
		});

		// console.log(newBtnData);
		setBtnData(newBtnData);
	}

	useEffect(() => {
		// console.log(dataToUse);

		dataToUse && setImgSrc(dataToUse?.images?.overview);
		dataToUse && setDesc(dataToUse?.overview?.content);
		dataToUse && setSource(dataToUse?.overview?.source);
		setSecImgSrc("");

		setBtnData([
			{
				id: "overview",
				name: "overview",
				active: true,
				planet: dataToUse?.name,
			},
			{
				id: "structure",
				name: "internal structure",
				active: false,
				planet: dataToUse?.name,
			},
			{
				id: "geology",
				name: "surface geology",
				active: false,
				planet: dataToUse?.name,
			},
		]);
	}, [dataToUse]);

	return (
		<>
			<section className="planet-section">
				{dataToUse && (
					<div className="container">
						{window.innerWidth <= 1024 && (
							<div className="action-btns mob">
								{(btnData || []).map((btn, i) => {
									return (
										<button
											data-btn-id={btn.id}
											key={btn.id}
											onClick={showOverview}
											className={btn.active ? "active" : ""}
										>
											0{i + 1}. {btn.name}
										</button>
									);
								})}
							</div>
						)}

						<div className="overal">
							<div className="img">
								<img src={imgSrc} alt={dataToUse?.name} />
								{secImgSrc !== "" && (
									<img
										className="geology"
										src={secImgSrc}
										alt={dataToUse?.name + "'s surface geology"}
									/>
								)}
							</div>
							<div className="info">
								<h2>{dataToUse?.name}</h2>
								<p>{desc}</p>
								<div className="source">
									<span>Source :</span>
									<a target="_blank" href={source} rel="noreferrer">
										{" "}
										Wikipedia
										<img src={sourceIcon} alt="icon" />
									</a>
								</div>
								{window.innerWidth > 1024 && (
									<div className="action-btns desktop">
										{(btnData || []).map((btn, i) => {
											return (
												<button
													data-btn-id={btn.id}
													key={btn.id}
													onClick={showOverview}
													className={btn.active ? "active" : ""}
												>
													0{i + 1}. {btn.name}
												</button>
											);
										})}
									</div>
								)}
							</div>
						</div>

						<div className="stats">
							<div>
								<h5>Rotation time</h5>
								<span>{dataToUse?.rotation}</span>
							</div>
							<div>
								<h5>revolution time</h5>
								<span>{dataToUse?.revolution}</span>
							</div>
							<div>
								<h5>radius</h5>
								<span>{dataToUse?.radius}</span>
							</div>
							<div>
								<h5>average temp</h5>
								<span>{dataToUse?.temperature}</span>
							</div>
						</div>
					</div>
				)}
			</section>
		</>
	);
}

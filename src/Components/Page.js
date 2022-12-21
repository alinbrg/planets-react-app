import Header from "./Header";

export default function Page({ children }) {
	return (
		<>
			<main>
				<Header />
				{children}
			</main>
		</>
	);
}

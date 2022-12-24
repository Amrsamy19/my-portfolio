import { BrowserRouter } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { useState, useEffect } from "react";

import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	const dummyRequest = () => {
		return new Promise((resolve) => setTimeout(() => resolve(), 1000));
	};

	useEffect(() => {
		dummyRequest().then(() => {
			if (isLoading) setIsLoading(!isLoading);
		});
	});

	if (isLoading) {
		return (
			<div className="overlay">
				<PacmanLoader color="#4db5ff" loading={isLoading} />
			</div>
		);
	}

	return (
		<BrowserRouter>
			<AnimatedRoutes />
		</BrowserRouter>
	);
}

export default App;

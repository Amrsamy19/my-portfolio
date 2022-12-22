import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainLayout from "../../layout/MainLayout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Work from "../../pages/Work";
import Contact from "../../pages/Contact";

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="projects" element={<Work />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;

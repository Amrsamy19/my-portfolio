import { motion } from "framer-motion";

import CTA from "./CTA";
import Socials from "./Socials";

import "./index.scss";

const Home = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				width: "100%",
				opacity: 1,
				transition: { delay: 0.5, duration: 1.2 },
			}}
			exit={{ x: window.innerWidth, transition: { delay: 0.5, duration: 0.5 } }}
		>
			<div className="header__container">
				<div className="typing-intro">
					<h5>Hello I'm</h5>
					<h1>Amr Samy</h1>
					<h5 className="text-light">Front End Web Developer</h5>
				</div>
				<CTA />
				<Socials />
			</div>
		</motion.section>
	);
};

export default Home;

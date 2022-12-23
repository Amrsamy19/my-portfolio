import CTA from "./CTA";
import Socials from "./Socials";
import { m, LazyMotion, domAnimation } from "framer-motion";

import "./index.scss";

const Home = () => {
	return (
		<LazyMotion features={domAnimation}>
			<m.section
				initial={{ opacity: 0 }}
				animate={{
					width: "55%",
					opacity: 1,
					transition: { delay: 0.5, duration: 1.2 },
				}}
				exit={{
					x: window.innerWidth,
					transition: { delay: 0.5, duration: 0.5 },
				}}
			>
				<div className="header__container">
					<div className="name">
						<p className="text-primary">Hello I'm</p>
						<h1>Amr Samy</h1>
						<h2 className="text-light">Front End Web Developer</h2>
					</div>
					<p className="intro text-light">
						Building websites can be a challenge, but I am up for any challenge
						as it will make learn new technologies.
					</p>
					<CTA />
					<Socials />
				</div>
			</m.section>
		</LazyMotion>
	);
};

export default Home;

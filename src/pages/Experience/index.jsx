import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";

import "./index.scss";

const Experience = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				width: "80%",
				opacity: 1,
				transition: { delay: 0.5, duration: 1.2 },
			}}
			exit={{ x: window.innerWidth, transition: { delay: 0.5, duration: 0.5 } }}
		>
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>

			<div className="experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>HTML</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>CSS</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>ReactJS</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>Bootstrap</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>Tailwind</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>i18Next</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>Framer-Motion</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
					</div>
				</div>
				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>NodeJS</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>MongoDB</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>MySQL</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>ExpressJS</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>Auth0</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details__icon" />
							<div>
								<h4>Python</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Experience;

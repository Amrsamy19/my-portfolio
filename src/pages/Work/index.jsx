import { motion } from "framer-motion";

import "./index.scss";

const PROJECTS = [
	{
		title: "plastikat-dashboard",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		repo: "https://github.com/Amrsamy19/plastikat-dashboard",
		link: "",
	},
	{
		title: "color-palette-generator",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		repo: "https://github.com/Amrsamy19/palette-generator",
		link: "",
	},
	{
		title: "advice-generator",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		repo: "https://github.com/Amrsamy19/advice-generator",
		link: "https://advicey-generator.netlify.app/",
	},
	{
		title: "movieflix",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		repo: "https://github.com/Amrsamy19/movieflix",
		link: "https://movieflix-c73c89.netlify.app/home",
	},
	{
		title: "FWD-CROSS-SKILLING-REACT",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		repo: "https://github.com/Amrsamy19/FWD-CROSS-SKILLING-REACT",
		link: "https://myreads-ba9fdd.netlify.app/",
	},
	{
		title: "temperature-converter",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		repo: "https://github.com/Amrsamy19/temperature-converter",
		link: "https://amrsamy19.github.io/temperature-converter/",
	},
];

const Work = () => {
	return (
		<motion.section
			className="work__container"
			initial={{ opacity: 0 }}
			animate={{
				width: "90%",
				opacity: 1,
				transition: { delay: 0.5, duration: 1.2 },
			}}
			exit={{ x: window.innerWidth, transition: { delay: 0.5, duration: 0.5 } }}
		>
			<h5>My Recent Projects</h5>
			<h2>Projects</h2>

			<div className="work__items">
				{PROJECTS.map((project) => {
					return (
						<article className="work__item">
							<h3>{project.title}</h3>
							<p className="text-light">{project.description}</p>
							<div className="work__item__cta">
								<a
									href={project.repo}
									className="btn"
									target="_blank"
									rel="noreferrer"
								>
									Github
								</a>
								<a
									href={project.link !== "" ? project.link : ""}
									className={
										project.link !== "" ? "btn btn-primary" : "btn-hidden"
									}
									target="_blank"
									rel="noreferrer"
								>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</motion.section>
	);
};

export default Work;

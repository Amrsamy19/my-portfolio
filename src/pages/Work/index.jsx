import { m, LazyMotion, domAnimation } from "framer-motion";
import "./index.scss";

const PROJECTS = [
	{
		title: "plastikat-dashboard",
		description:
			"Dashboard built with React and Tailwind where Integrated with Auth0 Authentication, implemented client-side CRUD operations with the Fetch API & made client-side routing using React-Router.",
		technologies: ["React", "React-Router", "Tailwind", "i18next", "Auth0"],
		repo: "https://github.com/Amrsamy19/plastikat-dashboard",
		link: "",
	},
	{
		title: "movieflix",
		description:
			"A web app for displaying movie data built with React, TypeScript, Tailwind where I can display movie details (Name, Rating, Genres, Overview), display top trending movies & search for a movie",
		technologies: ["React", "React-Router", "TypeScript", "Tailwind"],
		repo: "https://github.com/Amrsamy19/movieflix",
		link: "https://movieflix-c73c89.netlify.app/home",
	},
	{
		title: "FWD-CROSS-SKILLING-REACT",
		description:
			"A bookshelf app built with ReactJS where search for books & categorization of books you have read, currently reading, or want to read",
		technologies: ["React", "React-Router"],
		repo: "https://github.com/Amrsamy19/FWD-CROSS-SKILLING-REACT",
		link: "https://myreads-ba9fdd.netlify.app/",
	},
	{
		title: "color-palette-generator",
		description:
			"A web app for generating a color palette built with React where it generates a random colors where it can be copied",
		technologies: ["React", "react-toastify"],
		repo: "https://github.com/Amrsamy19/palette-generator",
		link: "",
	},
	{
		title: "advice-generator",
		description:
			"A web app for generating advices built with React where it generates an advices.",
		technologies: ["Preact"],
		repo: "https://github.com/Amrsamy19/advice-generator",
		link: "https://advicey-generator.netlify.app/",
	},
];

const Work = () => {
	return (
		<LazyMotion features={domAnimation}>
			<m.section
				initial={{ opacity: 0 }}
				animate={{
					width: "70%",
					opacity: 1,
					transition: { delay: 0.5, duration: 1.2 },
				}}
				exit={{
					x: window.innerWidth,
					transition: { delay: 0.5, duration: 0.5 },
				}}
				className="work__container"
			>
				<h5>My Recent Projects</h5>
				<h2>Projects</h2>

				<div className="work__items">
					{PROJECTS.map((project) => {
						return (
							<article className="work__item">
								<h3>{project.title}</h3>
								<p className="text-light">{project.description}</p>
								<p className="text-light">{project.technologies.join(", ")}</p>
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
			</m.section>
		</LazyMotion>
	);
};

export default Work;

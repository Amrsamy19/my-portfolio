import { m, LazyMotion, domAnimation } from "framer-motion";

import ME from "../../assets/me-about.jpg";
import "./index.scss";

const About = () => {
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
			>
				<h5>Get To Know</h5>
				<h2>About Me</h2>

				<div className="about__container">
					<div className="about__me">
						<div className="about__me__img">
							<img src={ME} alt="about_me" loading="lazy" />
						</div>
					</div>

					<div className="about__content">
						<p>
							I am a Front-End Web Developer born and raised in Cairo, Egypt. I
							graduated from
							<a href="https://cu.edu.eg/Home" target="_blank">
								{" "}
								Cairo University
							</a>{" "}
							and have a serious passion for UI interactions, animations and
							creating intuitive and dynamic user experiences.
						</p>

						<p>
							I am a well-organised person, problem solver and cooperative
							person with high attention to detail. Fan of English literature
							and online gaming.
						</p>

						<p>
							Here are a few technologies I've been working with recently:
							<ul className="about__technologies">
								<li>JavaScript (ES6+)</li>
								<li>TypeScript</li>
								<li>React</li>
								<li>Node.js</li>
								<li>Tailwind CSS</li>
								<li>HTML & (S)CSS</li>
							</ul>
						</p>
						<a href="/contact" className="btn btn-primary">
							Let's Talk
						</a>
					</div>
				</div>
			</m.section>
		</LazyMotion>
	);
};

export default About;

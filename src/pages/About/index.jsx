import { FaAward } from "react-icons/fa";
import { VscFolderOpened } from "react-icons/vsc";
import { motion } from "framer-motion";

import ME from "../../assets/me-about.jpg";

import "./index.scss";

const About = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				width: "70%",
				opacity: 1,
				transition: { delay: 0.5, duration: 1.2 },
			}}
			exit={{ x: window.innerWidth, transition: { delay: 0.5, duration: 0.5 } }}
		>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="about__container">
				<div className="about__me">
					<div className="about__me__img">
						<img src={ME} alt="about_me" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>1+ Years Working</small>
						</article>

						<article className="about__card">
							<VscFolderOpened className="about__icon" />
							<h5>Projects</h5>
							<small>10+ Projects</small>
						</article>
					</div>
					<p>
						I am a Front-End Web Developer born and raised in Cairo, Egypt. I
						have a serious passion for UI interactions, animations and creating
						intuitive and dynamic user experiences.
						<br />
						<br />I am a well-organised person, problem solver and cooperative
						person with high attention to detail. Fan of English literature and
						online gaming.
					</p>
					<a href="/contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</motion.section>
	);
};

export default About;

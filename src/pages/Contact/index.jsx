import { useRef } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";

import "./index.scss";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			"service_dc3qb0e",
			"template_2rjkrtk",
			form.current,
			"xT88mQTbxxAd0kpNe"
		);

		e.target.reset();
	};

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
				<h5>Get In Touch</h5>
				<h2>Contact Me</h2>

				<div className="contact__container">
					<form ref={form} onSubmit={sendEmail}>
						<input
							type="text"
							name="name"
							placeholder="Your Full Name"
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							required
						/>
						<textarea
							name="message"
							rows="7"
							placeholder="Your Message"
							required
						></textarea>
						<button type="submit" className="btn btn-primary">
							Send Message
						</button>
					</form>
				</div>
			</m.section>
		</LazyMotion>
	);
};

export default Contact;

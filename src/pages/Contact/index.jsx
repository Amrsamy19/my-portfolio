import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

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
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				width: "55%",
				opacity: 1,
				transition: { delay: 0.5, duration: 1.2 },
			}}
			exit={{ x: window.innerWidth, transition: { delay: 0.5, duration: 0.5 } }}
		>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option__icon" />
						<h3>Email</h3>
						<h4>amrsamy622@gmail.com</h4>
						<a
							href="mailto:amrsamy622@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option__icon" />
						<h3>WhatsApp</h3>
						<h4>+201062963121</h4>
						<a
							href="https://api.whatsapp.com/send?phone=+201062963121"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input type="email" name="email" placeholder="Your Email" required />
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
		</motion.section>
	);
};

export default Contact;

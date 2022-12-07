import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const Socials = () => {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/3mrsamy/"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin size={28} />
			</a>
			<a href="https://github.com/Amrsamy19" target="_blank" rel="noreferrer">
				<BsGithub size={28} />
			</a>
			<a
				href="https://twitter.com/IamBigBanana19"
				target="_blank"
				rel="noreferrer"
			>
				<BsTwitter size={28} />
			</a>
		</div>
	);
};

export default Socials;

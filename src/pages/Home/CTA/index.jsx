import { Link } from "react-router-dom";
import CV from "../../../assets/cv.pdf";

const CTA = () => {
	return (
		<div className="cta">
			<a href={CV} download className="btn">
				Download CV
			</a>
			<Link to="/contact" className="btn btn-primary">
				Let's Talk
			</Link>
		</div>
	);
};

export default CTA;

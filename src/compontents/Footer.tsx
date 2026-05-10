import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="row pt-5 pb-5 align-space-between justify-content-center">
			<div className="col-md-4 d-flex justify-content-center align-center text-start ps-5">
				Taylor Fernandez
				<br />
				Built using React with the Motion library
			</div>
			<div className="col-md-2" />
			<div className="col-md-2 footer-link">
				<Link to="https://github.com/TaylorFernandez" target="_blank">Github</Link>


			</div>
			<div className="col-md-2 footer-link">
				<Link to="https://github.com/TaylorFernandez/website" target="_blank">Source Code</Link>

			</div>
			<div className="col-md-2 footer-link">
				<Link to="www.linkedin.com/in/taylor-fernandez-delara-03b72b235" target="_blank">LinkedIn</Link>

			</div>
		</div>
	)
}

export default Footer;

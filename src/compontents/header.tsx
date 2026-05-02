import { Link } from "react-router-dom";
function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand ps-5" to="/">
					Engineer.Dev
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" area-controls="navbarSupportedContent" area-expanded="false" area-label="Toggle Navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse justify-content-center navbar-collapse ps-0 ms-0" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto space-between gx-5">
						<Link className="nav-link" to="/projects">Projects</Link>
						<Link className="nav-link" to="/experience">Experience</Link>
						<Link className="nav-link" to="/contact">Contact</Link>

					</ul>
				</div>

				<div>
					<Link className="btn btn-primary  me-5" to="https://github.com/TaylorFernandez" target="_blank">Visit My GitHub</Link>			</div>	</div>

		</nav>
	);
}

export default Header;

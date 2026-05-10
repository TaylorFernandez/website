import { useState, useEffect } from 'react';
import { type ProjectModel } from '../networking/interfaces/ProjectModel';
import { fetchProjects } from '../networking/ProjectsApi';
import MainRow from '../compontents/MainRow';
import Footer from '../compontents/Footer';
import DefaultLoader from '../compontents/shared/DefaultLoader';
import Project from '../compontents/Project';
const Projects = () => {
	const [projects, setProjects] = useState<ProjectModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetchProjects()
			.then((data) => setProjects(data))
			.catch((err) => setError(err.message))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className="column page">
			<MainRow scrollProgressArray={[0, 0.25]} positionOffset={[1, 0]} transformOffset={[0, -100]}>
				<p className="main-text">Projects</p>
			</MainRow>
			<div className="container-fluid content-background pt-5 pb-5">
				{isLoading && <DefaultLoader />}
				{error && <div>Error: {error}</div>}
				{!isLoading && !error &&
					<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
						{projects.map((project, index) =>
							<Project
								key={index}
								title={project.name}
								description={project.description}
								url={project.html_url}
								clone_url={project.clone_url}
								languages={project.languages}
								stars={project.stargazers_count}
								clones={project.clone_count}
								visitors={project.visitor_count}
							/>
						)}
					</div>
				}
			</div>
			<Footer />
		</div>
	);
}

export default Projects;

import { useState, useEffect } from 'react';
import { type ProjectModel } from '../networking/interfaces/ProjectModel';
import { fetchProjects } from '../networking/ProjectsApi';

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

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<h1>Projects</h1>
			{projects.map((project, index) => (
				<div key={index}>
					<h2>{project.name}</h2>
					<p>{project.description}</p>
				</div>
			))}
		</div>
	);
}

export default Projects;

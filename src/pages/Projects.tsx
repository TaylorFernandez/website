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
	const [search, setSearch] = useState('');
	const [filteredProjects, setFilteredProjects] = useState<ProjectModel[]>([]);
	const [topLanguages, setTopLanguages] = useState<string[]>([]);
	const [activeLanguage, setActiveLanguage] = useState<string | null>(null);

	useEffect(() => {
		fetchProjects()
			.then((data) => {
				setProjects(data);
				setFilteredProjects(data);
				setTopLanguages(getTopLanguages(data, 5));
			})
			.catch((err) => setError(err.message))
			.finally(() => setIsLoading(false));
	}, []);

	function getTopLanguages(projects: ProjectModel[], n: number): string[] {
		const counts: Record<string, number> = {};

		projects.forEach((project) => {
			Object.keys(project.languages).forEach((lang) => {
				const normalized = lang.toLowerCase();
				if (normalized !== "url") {
					counts[normalized] = (counts[normalized] ?? 0) + 1;
				}
			});
		});

		return Object.entries(counts)
			.sort((a, b) => b[1] - a[1])
			.slice(0, n)
			.map(([lang]) => lang);
	}

	function applyFilters(searchTerm: string, language: string | null) {
		const filtered = projects.filter((project) => {
			const matchesSearch = project.name.toLowerCase().includes(searchTerm);
			const matchesLanguage = language
				? Object.keys(project.languages).some(
					(lang) => lang.toLowerCase() === language.toLowerCase()
				)
				: true;
			return matchesSearch && matchesLanguage;
		});

		setFilteredProjects(filtered);
	}


	function handleSearch(e) {
		const searchTerm = e.target.value.toLowerCase();
		setSearch(searchTerm);

		applyFilters(searchTerm, activeLanguage);
	}

	function handleLanguageFilter(lang: string) {
		const next = activeLanguage === lang ? null : lang;
		setActiveLanguage(next);

		applyFilters(search, next);

	}

	return (
		<div className="column page">
			<MainRow scrollProgressArray={[0, 0.25]} positionOffset={[1, 0]} transformOffset={[0, -100]}>
				<p className="main-text">Projects</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a odio in dui porta eleifend sit amet sit amet ante. Praesent sagittis ipsum erat, varius gravida risus pellentesque sit amet. Ut quis nisl vitae tellus iaculis pretium. Nullam pretium sem vel erat vestibulum euismod. Sed luctus, nibh sed maximus aliquet, lacus diam venenatis sem, ac tincidunt urna tortor in arcu. Maecenas ullamcorper, odio a cursus maximus, turpis erat vehicula nibh, vel vestibulum ante velit at metus. Praesent lorem leo, scelerisque vitae felis nec, tincidunt auctor orci. Sed gravida ligula eu tortor consectetur luctus vel vitae nisi. Praesent viverra justo in mi varius, vitae mollis sem condimentum. Proin vulputate nunc vitae risus luctus consequat. Maecenas nec nunc turpis. Praesent ornare tellus massa, vel venenatis diam posuere rutrum. Nullam est lorem, consequat eu egestas sodales, aliquam sed elit.</p>
			</MainRow>
			<div className="d-flex justify-content-between align-items-start mb-3 mt-2 ms-2 me-2 ps-3 pe-3 pb-3 pt-3 content-background">
				<div className="col-md-4 ps-3">
					<input className="form-control input" value={search} onChange={handleSearch} placeholder='Search For a Project' />
				</div>
				<div className="d-flex flex-wrap gap-2 pe-2">
					{topLanguages.map((lang) => {
						const normalized = lang.charAt(0).toUpperCase() + lang.slice(1);
						return <button
							key={normalized}
							onClick={() => handleLanguageFilter(normalized)}
							className={`btn btn-sm ${activeLanguage === normalized ? 'btn-primary' : 'btn-outline-secondary'}`}
						>{normalized}</button>
					})}
				</div>
			</div>
			<div className="container-fluid content-background pt-5 pb-5">
				{isLoading && <DefaultLoader />}
				{error && <div>Error: {error}</div>}
				{!isLoading && !error &&
					<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
						{filteredProjects.map((project, index) =>
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

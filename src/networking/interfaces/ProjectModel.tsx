export interface ProjectModel {
	name: string;
	description: string;
	html_url: string;
	clone_url: string;
	languages: Record<string, number | string>;
	stargazers_count: number;
	clone_count: number;
	visitor_count: number;
}

import { API_BASE_URL } from "../Constants";
import { type ProjectModel } from "./interfaces/ProjectModel";

export async function fetchProjects(): Promise<ProjectModel[]> {
	const res = await fetch(API_BASE_URL + "projects");
	const json = await res.json();
	return json;
}

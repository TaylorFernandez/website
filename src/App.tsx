import Header from "./compontents/header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects/" element={<Projects />} />
				<Route path="/experience/" element={<Experience />} />
				<Route path="/contact/" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;

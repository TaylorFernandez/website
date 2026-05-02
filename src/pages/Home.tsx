import MainRow from "../compontents/MainRow";
import { motion, useScroll, useTransform } from 'framer-motion';
import placeholder from '../assets/placeholder.jpg';
import LeftImageRow from "../compontents/LeftImageRow";
import RightImageRow from "../compontents/RightImageRow";
import Footer from "../compontents/Footer";

function Home() {
	const { scrollYProgress: completionProgress } = useScroll();

	const opacityProject1 = useTransform(completionProgress, [0.25, 0.5], [0, 1]);
	const transformProject1 = useTransform(completionProgress, [0.4, 1], [-100, 1]);

	const opacityProject2 = useTransform(completionProgress, [0.5, 0.75], [0, 1]);
	const transformProject2 = useTransform(completionProgress, [0.4, 1], [-100, 1]);

	const opacityProject3 = useTransform(completionProgress, [0.75, 1], [0, 1]);
	const transformProject3 = useTransform(completionProgress, [0.4, 1], [-100, 1]);

	/*---- Page Content ----*/
	const project1Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan vitae sem id condimentum. Aliquam maximus fringilla odio vel ornare. Fusce vel lorem eget quam egestas luctus. Duis accumsan iaculis semper. Sed ullamcorper pellentesque leo at aliquet. Duis non metus varius, placerat ipsum quis, pulvinar nibh. Proin ipsum sem, euismod et pharetra vitae, facilisis a orci. Aliquam elementum scelerisque eros at varius. Phasellus lacinia sapien mollis suscipit pellentesque. Mauris nec augue turpis. Maecenas auctor eros ac metus euismod, vel mattis tortor sagittis. Integer sed ex at libero accumsan varius. Maecenas luctus ipsum felis, ac consectetur erat fermentum consequat. Maecenas tincidunt ornare varius.";

	return (
		<div className="column page">
			<MainRow scrollProgressArray={[0, 0.25]} positionOffset={[1, 0]} transformOffset={[0, -100]} >
				<div className="col-md-11">
					<p className="main-text">

						Lorem ipsum dolor sit.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus est, dictum et porta sed, blandit ultricies turpis. Praesent mattis auctor augue, sit amet rutrum leo feugiat at. Fusce convallis mi et arcu egestas, eu sollicitudin nunc egestas. Etiam in ornare dui. Sed pharetra velit dolor, at convallis tellus viverra id. In suscipit luctus nunc et interdum. Integer vel felis at justo ullamcorper eleifend ac eget lacus. Aenean vitae sem eu tellus tempor viverra. Ut euismod tortor sit amet consectetur condimentum. In sed diam a erat suscipit vehicula ut malesuada turpis. Quisque molestie pretium lorem vel varius. Cras dictum tellus purus, a scelerisque quam vulputate ut. Aenean sit amet odio eu urna blandit imperdiet quis quis erat. Sed a nibh nisi. Donec porttitor non eros ac commodo. In suscipit sollicitudin nisl, nec molestie purus pellentesque sit amet.
					</p>
				</div>
			</MainRow>
			<motion.div className="row" style={{ opacity: opacityProject1, transform: transformProject1 }}>
				<RightImageRow image={placeholder} imageDescription="Generic Project Placeholder">
					<p style={{ maxWidth: "800px" }}>{project1Description}</p>
				</RightImageRow>
			</motion.div>
			<motion.div className="row" style={{ opacity: opacityProject2, transform: transformProject2 }}>
				<LeftImageRow image={placeholder} imageDescription="Generic Project Placeholder">
					<p style={{ maxWidth: "800px" }}>{project1Description}</p>
				</LeftImageRow>
			</motion.div>
			<motion.div className="row" style={{ opacity: opacityProject3, transform: transformProject3 }}>
				<RightImageRow image={placeholder} imageDescription="Generic Project Placeholder">
					<p style={{ maxWidth: "800px" }}>{project1Description}</p>
				</RightImageRow>
			</motion.div>
			<Footer />
		</div >

	);
}

export default Home;

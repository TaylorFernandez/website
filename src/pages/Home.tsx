import MainRow from "../compontents/MainRow";
import { motion, useScroll, useTransform } from 'framer-motion';

function Home() {
	const { scrollYProgress: completionProgress } = useScroll();
	const opacity = useTransform(completionProgress, [0, 1], [1, 0]);
	const transform = useTransform(completionProgress, [0, 1], [0, -100]);

	return (
		<div className="column">
			<div className="row">
				<MainRow>
					<div className="col-md-12">
						<motion.p className="main-text" style={{ opacity, transform }}>
							Hi, I'm Taylor!
						</motion.p>
						<motion.p style={{ opacity, transform }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus est, dictum et porta sed, blandit ultricies turpis. Praesent mattis auctor augue, sit amet rutrum leo feugiat at. Fusce convallis mi et arcu egestas, eu sollicitudin nunc egestas. Etiam in ornare dui. Sed pharetra velit dolor, at convallis tellus viverra id. In suscipit luctus nunc et interdum. Integer vel felis at justo ullamcorper eleifend ac eget lacus. Aenean vitae sem eu tellus tempor viverra. Ut euismod tortor sit amet consectetur condimentum. In sed diam a erat suscipit vehicula ut malesuada turpis. Quisque molestie pretium lorem vel varius. Cras dictum tellus purus, a scelerisque quam vulputate ut. Aenean sit amet odio eu urna blandit imperdiet quis quis erat. Sed a nibh nisi. Donec porttitor non eros ac commodo. In suscipit sollicitudin nisl, nec molestie purus pellentesque sit amet.
						</motion.p>
					</div>
				</MainRow>
			</div>

		</div>
	);
}

export default Home;

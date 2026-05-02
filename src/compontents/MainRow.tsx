import { type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
	children: ReactNode;
	scrollProgressArray: Array<number>;
	positionOffset: Array<number>;
	transformOffset: Array<number>;
}

function MainRow({ children, scrollProgressArray, positionOffset, transformOffset }: Props) {
	const { scrollYProgress: completionProgress } = useScroll();
	const opacity = useTransform(completionProgress, scrollProgressArray, positionOffset);
	const transform = useTransform(completionProgress, scrollProgressArray, transformOffset);

	return (
		<div className="column main-content-background" style={{ height: "99vh" }}>
			<div className="row d-flex justify-content-center text-center align-items-center h-100">
				<motion.div className="col-md-6" style={{ opacity, transform }}>
					{children}
				</motion.div>
			</div>
		</div>

	);
}

export default MainRow;

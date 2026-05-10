import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegFolder, FaExternalLinkAlt, FaCode, FaEye, FaClipboard, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Props {
	title: string;
	description: string;
	url: string;
	clone_url: string;
	languages: string[][];
	stars: number;
	clones: number;
	visitors: number;
}


const Project = ({ title, description, url, clone_url, languages, stars, clones, visitors }: Props) => {
	const languageList = Object.keys(languages).filter((key) => key !== 'url').slice(0, 3);

	return (
		<motion.div className="col" whileHover={{ scale: 1.03 }}>
			<div className="project-card card h-100">
				<div className="card-body">
					<div className="d-flex justify-content-between align-items-start mb-3">
						<div className="p-2 rounded">
							<FaRegFolder />
						</div>
						<div className="d-flex gap-2">
							<motion.div whileHover={{ scale: 1.1 }}>
								<CopyToClipboard text={clone_url}>
									<FaClipboard />
								</CopyToClipboard>
							</motion.div>
							<a href={url} target="_blank"><FaExternalLinkAlt /></a>
						</div>
					</div>
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<div className="container-fluid">
						<div className="row row-cols-1 row-cols-md-2 row-cols-xl-5 g-3">
							{languageList.map((language) =>
								<span className="badge rounded-pill text-bg-primary" key={language}>{language}</span>
							)}
						</div>
					</div>
					<hr />
					<div className="d-flex justify-content-between align-items-start mb-3">
						<div className="p2">
							<FaCode />
							<label className="ps-2">{languageList[0]}</label>
						</div>
						<div className="p2">
							<FaEye />
							<label className='ps-2 pe-2'>{visitors}</label>
							<FaClipboard />
							<label className='ps-2 pe-2'>{clones}</label>
							<FaStar />
							<label className='ps-2 pe-2'>{stars}</label>
						</div>
					</div>
				</div>
			</div>
		</motion.div >
	);
}

export default Project;


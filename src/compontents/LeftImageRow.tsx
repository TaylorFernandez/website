import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
    children: ReactNode;
    image: string;
    imageDescription: string;
}

function LeftImageRow({ children: body, image, imageDescription }: Props) {
    return (
        <motion.div className="column content-background" whileHover={{scale: 1.01}}>
            <div className="row d-flex justify-content-center text-center align-items-center h-100">
                 <div className="col-md-4">
                    <img className="project-image" src={image} alt={imageDescription}/>
                </div>
                <div className=" d-flex col-md-6 justify-content-center text-center align-items-center ">
                    {body}
                </div>
            </div>
        </motion.div>

    );
}

export default LeftImageRow;

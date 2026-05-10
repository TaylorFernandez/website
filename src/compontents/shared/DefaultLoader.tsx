import { Blocks } from 'react-loader-spinner';

const DefaultLoader = () => {
	return (
		<Blocks
			height="80"
			width="80"
			color="#9cdaf2"
			ariaLabel="loading"
			wrapperStyle={{}}
			wrapperClass="blocks-wrapper"
			visible={true}
		/>

	)
}

export default DefaultLoader;

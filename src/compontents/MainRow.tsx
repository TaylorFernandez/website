import { type ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

function MainRow({ children }: Props) {
	return (
		<div className="column main-content-background" style={{ height: "100vh" }}>
			<div className="row d-flex justify-content-center text-center align-items-center h-100">
				{children}
			</div>
		</div>

	);
}

export default MainRow;

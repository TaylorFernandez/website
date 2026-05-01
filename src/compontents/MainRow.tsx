import { type ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

function MainRow({ children }: Props) {
	return (
		<div className="column main-content-background" style={{ height: "99vh" }}>
			<div className="row d-flex justify-content-center text-center align-items-center h-100">
				<div className="col-md-6">
					{children}
				</div>
			</div>
		</div>

	);
}

export default MainRow;

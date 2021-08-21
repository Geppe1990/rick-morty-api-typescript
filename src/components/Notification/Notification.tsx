import React from 'react';
import Cta from "../Cta/Cta";
import './notification.scss'

interface Props {
	message: string,
	type: string
}

const Notification: React.FC<Props> = ({type, message}) => {
	return (
		<div className="container">
			<div className={`notification ${type}`}>
				<span>{message}</span>
				{type == "error" ? (
					<Cta link={"/"} text={"Go to Home"} />
				) : null}
			</div>
		</div>
	);
}

export default Notification;

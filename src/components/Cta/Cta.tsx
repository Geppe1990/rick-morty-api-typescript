import React from 'react';
import { Link } from "react-router-dom";
import './cta.scss';

interface IProps {
	text: string,
	link: string
}

const Cta: React.FC<IProps> = ({ link, text }) => (
	<Link className="cta" to={link}>
		{text}
	</Link>
)

export default Cta;

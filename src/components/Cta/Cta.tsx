import React from 'react';
import { Link } from "react-router-dom";
import './cta.scss';

interface Props {
	text: string,
	link: string
}

const Cta: React.FC<Props> = ({ link, text}) => (
	<Link className="cta" to={link}>
		{text}
	</Link>
)

export default Cta;

import React from 'react';
import 'tachyons';

const Card = (props) => {
	return (
		<div className='tc dib grow ma3 pa3 bg-light-green br3 shadow-4'>
			<h2>{props.name}</h2>
			<p>{props.email}</p>
			<p>{props.email}</p>
			<p>{props.email}</p>
			<p>{props.email}</p>
			<p>{props.email}</p>
			<p>{props.email}</p>
			<p>{props.email}</p>
			<p>{props.email}</p>
			<p>{props.email}</p>
		</div>
		)
}

export default Card ;
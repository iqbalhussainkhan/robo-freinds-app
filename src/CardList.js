import React from 'react';
import Card from './Card';

const CardList = (props) => {

	const cardlist = props.robots.map(robot => {
		return <Card name={`photo${robot.id}`} email={robot.title}  id={robot.id} key={robot.id}/>
	})
	return (
		<div>
			{cardlist}
		</div>
		)
}

export default CardList;
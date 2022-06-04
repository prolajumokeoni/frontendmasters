import React from 'react'

const Pets = (props) => {
	return (
	<div> 
		<p>{props.name}</p>
		<p>{props.breed}</p>
		<p>{props.animal}</p>
		</div>
	)
}

export default Pets
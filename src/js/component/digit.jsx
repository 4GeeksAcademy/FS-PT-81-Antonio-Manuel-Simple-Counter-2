import React from "react";

//include images into your bundle




//create your first component
const Digit = (props) => {

	
	
	return (
		<>
			<div className ="card" style={{width: '5rem'}} >
				<div className="card-body text-center">
				<h1>{props.img} {props.time}</h1>
					</div> </div>
				
		</>
	);
};

export default Digit;
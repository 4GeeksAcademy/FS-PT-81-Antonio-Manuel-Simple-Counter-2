// import React from "react";
// import {Digit} from "./digit"
// //include images into your bundle


//create your first component


// const Home = ({counter}) => {
// 	const digit = counter.toString().padStart(6,'0')

// 	// let SimpleTime = time.toString().split('').reverse()
	
// 	return (
// 		<>
// 			{/* <div className ="wrapper">
// 				<Digit/>

// 			</div> */}
// 			{digit.split("").map((digit, index) => (
// 				<div key={index}>
// 					<digit time={parseInt(digit)}/>
// 				</div>

// 			))}
// 		</>
// 	);
// };

// let counter = 0;
// 	setInterval(function() {
// 		const seis = Math.floor(counter/100000) % 10;
// 		const cinco = Math.floor (counter/10000) % 10;
// 		const cuatro = Math.floor (counter/1000) % 10;
// 		const tres = Math.floor (counter/100) % 10;
// 		const dos = Math.floor (counter/10) % 10;
// 		const uno = Math.floor(counter/1) % 10;
// 		console.log(seis, cinco, cuatro, tres, dos, uno)
// 		counter++;

// 		ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

// 	}, 1000);

// export default Home;

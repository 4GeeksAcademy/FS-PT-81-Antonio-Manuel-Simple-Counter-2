//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


import Digit from "./component/digit";


// include your styles into the webpack bundle
import "../styles/index.css";

const Home = ({counter}) => {
	const digits = counter.toString().padStart(6,'0')

	// let SimpleTime = time.toString().split('').reverse()
	
	return (
		<>
			<div className ="container my-5">
			<div className="row d-flex justify-content-center">
                <div className="col-1 mx-1">
                    <Digit digit= {<i className="fa-solid fa-clock"></i>}
                    style={{width: "50 px", height: "50px"
                    }}
                    /> 
                    </div>                
                    {digits.split("").map((digit, index) => (
				<div key={index} className="col-1 mx-1">
					<Digit time={parseInt(digit)}/>
				</div>
                    ))}
                </div>	

			</div> 

		</>
	);
};

let counter = 0;
	setInterval(function() {
		const seis = Math.floor(counter/100000) % 10;
		const cinco = Math.floor (counter/10000) % 10;
		const cuatro = Math.floor (counter/1000) % 10;
		const tres = Math.floor (counter/100) % 10;
		const dos = Math.floor (counter/10) % 10;
		const uno = Math.floor(counter/1) % 10;
		console.log(seis, cinco, cuatro, tres, dos, uno)
		counter++;
    
		ReactDOM.createRoot(document.getElementById('app')).render(<Home counter={counter}/>);

    },1000);

  
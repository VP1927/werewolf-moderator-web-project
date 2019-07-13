import React from 'react';
//import router
import {
  Link,
} from "react-router-dom";

class Main extends React.Component {
	render() {
		return (
			<div className='mainPage container-fluid'>
				<div className='container main'>
					<h1 className="logo ">Werewolf Moderator</h1>
					<div className='descrip d-flex justify-content-center'>
					<p >This project is built to support moderator of the Werewolf boardgame. It helps you setup the number of players and cards, random roles for each player and manage the gameplay easier.   </p>
					</div>

					<div className='d-flex justify-content-center align-items-center'>
						<Link to='/setup' className='setupBtn btn btn-primary'>
							Setup
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Main
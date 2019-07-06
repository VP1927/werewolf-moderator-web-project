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
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non quam metus. Ut luctus quam et dignissim lobortis. Maecenas vestibulum in arcu id bibendum.  </p>
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
import React from 'react';
//style
import './Header.css';

//import router
import {
  Link,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";

class Header extends React.Component{
	render(){
		return (

			<div className='header'>
				<nav className='navbar navbar-expand-lg fixed-top' id='mainNav'>
					<div className= 'container'>
					<NavLink to='/' className = 'name navbar-brand js-scroll-trigger'>Werewolf Moderator</NavLink>
					
									
				      <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				        Menu
				        <i className="fas fa-bars"></i>
      				</button>
					
					<div className='collapse navbar-collapse justify-content-end' id="navbarResponsive">
						<ul className='navbar-nav ml-auto'>
							<li className="nav-item mx-0 mx-lg-1">
								<NavLink to='/about' className = 'nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'>About</NavLink>
							</li>
							<li className="nav-item mx-0 mx-lg-1">
								<NavLink to='/cl' className = 'nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'>Card List</NavLink>
							</li>
							<li className="nav-item mx-0 mx-lg-1">
								<NavLink to='/rule' className = 'nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'>Game Rule</NavLink>
							</li>
						</ul>
					</div>
					</div>


					
				</nav>
			</div>

		);
	}
}

export default Header;

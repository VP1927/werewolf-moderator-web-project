import React from 'react';

class About extends React.Component{
	render() {
		return (
			<div className='container-fluid mainPage'>
				<h1 className= 'pageName'> About Us </h1>
				<div className= 'container aboutPage'>
					<div className='row'>
						<div className='col-lg-4'>
							<div id='f1_container'>
								<div className='content'>
									<div id="f1_card" className="shadow">
										<div className="front face">
											<img className=" img-fluid" src={require('../images/backside2.jpg')} alt=''/>
										</div>
										<div className="back face center">
											<p>After playing werewolves boardgame for 5 years,
										we realized the struggle of the moderator having to
										remember all players' roles as well as their actions during the night time.
										This website was built to support the moderator in terms of 
										setting up gameplay and managing players.</p>
										</div>
									</div>
									<h3 class="card-title">Member name:<br/> Nguyen Van Nhi</h3> 
								</div>
							</div>

						</div>
						
						<div className='col-lg-4'>
							<div id='f1_container'>
								<div className='content'>
									<div id="f1_card" className="shadow">
										<div className="front face">
											<img className=" img-fluid" src={require('../images/backside2.jpg')} alt='' />
										</div>
										<div className="back face center">
											<p>After playing werewolves boardgame for 5 years,
										we realized the struggle of the moderator having to
										remember all players' roles as well as their actions during the night time.
										This website was built to support the moderator in terms of 
										setting up gameplay and managing players.</p>
										</div>
									</div>
									<h3 class="card-title">About the project</h3> 
								</div>
							</div>
						
						</div>
						
						<div className='col-lg-4'>
							<div id='f1_container'>
								<div className='content'>
									<div id="f1_card" className="shadow">
										<div className="front face">
											<img className=" img-fluid" src={require('../images/backside2.jpg')} alt='' />
										</div>
										<div className="back face center">
											<p>After playing werewolves boardgame for 5 years,
										we realized the struggle of the moderator having to
										remember all players' roles as well as their actions during the night time.
										This website was built to support the moderator in terms of 
										setting up gameplay and managing players.</p>
										</div>
									</div>
									<h3 class="card-title">Member name:<br/> Pham Viet Cuong</h3> 
								</div>
							</div>
						
						</div>
						
					</div>

				</div>
			</div>
		)
	}
}

export default About

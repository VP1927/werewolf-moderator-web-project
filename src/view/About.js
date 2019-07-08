import React from 'react';



class About extends React.Component{
	render() {
		return (
			<div className='container-fluid aboutPage'>
				<div className='row'>
					<div className='col-lg-4' id='f1_container'>
						<div id="f1_card" class="shadow">
							<div class="front face">
								<img class=" img-fluid" src="/images/werewolf.jpg" />
								{/* <h4 class="card-title">Sunlimetech</h4> */}
							</div>
							<div class="back face center">
								<p>After playing werewolves boardgame for 5 years,
							we realized the struggle of the moderator having to
							remember all players' roles as well as their actions during the night time.
							This website was built to support the moderator in terms of 
							setting up gameplay and managing players.</p>
							</div>
						</div>
					</div>


				</div>
			</div>
		)
	}
}

export default About

import React from 'react';



class Main extends React.Component{
	render(){
		return(
			<div className = "main container">
				hello world
			</div>
		)
		
	}
}

class Rule extends React.Component{
	render (){
		return (
			<div>
				<Main />
			</div>
		)
	}
}

export default Rule
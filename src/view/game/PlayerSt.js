import React from 'react';

import globalState from './GlobalState'


class PlayerSt extends React.Component{

	constructor(props){
		super(props);
		this.state= {
			value :'',
			playersList : {},
		}

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.inputName = this.inputName.bind(this);
	    this.handleSubmitName = this.handleSubmitName.bind(this);
	}

	handleChange(event) {
		const num = (event.target.validity.valid) ? event.target.value : this.state.value;
    	this.setState({value: num});
  	}

    handleSubmit(event) {
    	globalState.pNum = parseInt(this.state.value,10);
    	this.setState({value : ''});
    	// alert('type of value ' + typeof globalState.pNum + ' is ' + globalState.pNum);
    	event.preventDefault();
  	}

  	inputName(event){
  		let value = event.target.value;
  		let name = event.target.name;
		this.setState(prevState => {
		  let playersList = {...prevState.playersList}  // creating copy of state variable name
		  playersList[name] = value;                     // update the name property, assign a new value     
		  return { playersList };                                 // return new object name object
		})

    	event.preventDefault();
  	}

  	genForm(number){
  		let table = [];
  		// this.state.name = [];

  		for (let i = 0;i<number;i++){
  			// this.state.name.push([]);
  			table.push(
  				// <li key={i}>
  					<label key={i} className=' col-sm-3'>
	        			Player {i+1} name: 
	          			<input type="text" onChange={this.inputName} class='inputName' name={'player_' + (i+1)} key={i} />
	        		</label>
  				// </li>
  			)
  		}
  		if (globalState.pNum >0){
  			table.push(
  				<div className='row'>
	  				<div className='col-sm-5'/>
	  				<input type="submit" value="Submit" key='input' className='summitBtn col-sm-2'/>
	  				<div className='col-sm-5'/>
	  			</div>
  			);
  		}
  		return table;
  	}

  	handleSubmitName(event){
  		globalState.players = [];
  		let list = this.state.playersList;
  		let i = 0;
  		var player;
  		for (player in list){
  			let p = {
  				id : i,
  				name : list[player],
  				role : '',
  			}
  			globalState.players.push(p);
  			i += 1;
  		}
  		// alert(globalState.players[0].name);
  		event.preventDefault();

  	}

	render (){
		return (
			<div className='container'>
	     		<form onSubmit={this.handleSubmit} className='number-summit'>
	        		<label>
	        			Number of player:
	          			<input type="text" pattern="[0-9]*" onChange={this.handleChange} value={this.state.value}  id='inputNumber'/>
	        		</label>
	        		<input type="submit" value="Submit" />

	      		</form>

	      		<form onSubmit={this.handleSubmitName} className='name-summit'>
		      		<div className='row'>
			        	{this.genForm(globalState.pNum)}
	      			</div>
	      		</form>
			</div>
		)
	}
}

export default PlayerSt